import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { CargarService } from '../cargar.service';
import { ComprarService } from '../comprar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jaccard',
  templateUrl: './jaccard.component.html',
  styleUrls: ['./jaccard.component.css']
})
export class JaccardComponent implements OnInit {
  misPedidos: any[] = [];
  misPedidosAgrupados: any[] = [];
  datos: any;
  datosUsuarios: any;
  pedidosOtro: any[] = []
  pedidosOtroUsuario: any[] = []
  pedidosRestoUsuarios: string[] = [];
  productosCompradosPorOtro: string[] = [];
  totalPedidos: string[] = [];
  k: number = 4;
  kAmigos: any[] = [];
  pedidosAmigos: any[] = [];
  pedidosAmigosAgrupados: any[] = [];
  dato:any;
  unidades: number = 1;
  mounted:boolean = false;

  constructor(private usuarioService: UsuarioService, private cargarService: CargarService, private comprarService: ComprarService, private router: Router) { }

  async ngOnInit() {
    let misPedidos: any = await this.obtenerMisPedidos();
    let pedidosOtros: any = await this.obtenerPedidosOtros();

    this.kAmigos = this.calculokAmigosPedidos(pedidosOtros);
    console.log(this.kAmigos)

    this.pedidosAmigosAgrupados = await this.obtenerPedidosAmigos(this.kAmigos)
    console.log(this.pedidosAmigosAgrupados)

     let pedidosOrdenados = this.ordenarPedidos(this.pedidosAmigosAgrupados)
     console.log(pedidosOrdenados)
     this.mounted = true;

  }


  async obtenerMisPedidos() {
    this.misPedidos = await this.usuarioService.obtenerPedidosUsuario();

    this.misPedidos.forEach((pedido) => {
      let estaAnyadido: boolean = false;
      if (this.misPedidosAgrupados.length === 0) {
        estaAnyadido = false;
      } else {
        for (let i = 0; i < this.misPedidosAgrupados.length; i++) {
          if (this.misPedidosAgrupados[i] === pedido) {
            estaAnyadido = true;
            return;
          } else {
            estaAnyadido = false;
          }
        }
      }
      if (estaAnyadido === false) {
        this.misPedidosAgrupados.push(pedido)
      }
    })

    return this.misPedidosAgrupados;
  }

  async obtenerPedidosOtros() {

    this.datos = await this.usuarioService.obtenerDatosOtro();
    this.datosUsuarios = this.datos.respuesta;

    for (let j = 0; j < this.datosUsuarios.length; j++) {
      this.pedidosOtro = await this.usuarioService.obtenerPedidosAmigo(this.datosUsuarios[j].email);
      this.productosCompradosPorOtro = [];
      this.pedidosOtro.forEach((pedido) => {
        for (let i = 0; i < pedido.length; i++) {
          this.productosCompradosPorOtro.push(pedido[i].producto.id);
        }
      })
      let ij = this.calculoIndiceJaccard(this.misPedidosAgrupados, this.productosCompradosPorOtro);
      this.pedidosOtroUsuario.push({ emailUsuario: this.datosUsuarios[j].email, pedidos: this.productosCompradosPorOtro, indice: ij });
    }

    return this.pedidosOtroUsuario;
  }

  calculoIndiceJaccard(l1: any, l2: any) {

    let l1ul2 = l1.concat(l2);

    let l1ul2Unicos = l1ul2.filter(function (value, index, self) {
      return self.indexOf(value) === index;
    });

    let denominador = l1ul2Unicos.length;

    let l1l2: string[] = [];
    l1.forEach((pedido: any) => {

      for (let j = 0; j < l2.length; j++) {
        if (pedido === l2[j]) {
          l1l2.push(l2[j]);
        }
      }
    })

    let numerador = l1l2.length;
    let ij = numerador / denominador;

    return ij;
  }

  calculokAmigosPedidos(listado: any) {
    let listadoOrdenado = listado.sort(function (a, b) {
      if (a.indice < b.indice) {
        return 1;
      }
      if (a.indice > b.indice) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });

    while (listadoOrdenado.length > this.k) {
      listadoOrdenado.pop();
    }
    return listadoOrdenado;
  }

  async obtenerPedidosAmigos(amigos: any) {
    // amigos.forEach(async (amigo: any) => {
      for(let j=0;j<amigos.length;j++){
      let pedidosAmigo = await this.usuarioService.obtenerPedidosAmigo(amigos[j].emailUsuario);
      pedidosAmigo.forEach((pedido: any) => {
        let pedidoNormalizado: any = this.normalizarCadaPedido(pedido);
        pedidoNormalizado.forEach((producto: any) => {
          this.pedidosAmigos.push({ producto: producto.producto, coeficiente: producto.peso })
         
          let estaAnyadido: boolean = false;
          let posicion = -1;
          if (this.pedidosAmigosAgrupados.length === 0) {
            this.pedidosAmigosAgrupados.push({ producto: producto.producto, coeficiente: producto.peso })
           
            //estaAnyadido = false;
          } else {
            for (let i = 0; i < this.pedidosAmigosAgrupados.length; i++) {
              if (producto.producto.id === this.pedidosAmigosAgrupados[i].producto.id) {
                posicion = i;
                estaAnyadido = true;
              }
            }
            if (estaAnyadido === true) {
              
              this.pedidosAmigosAgrupados[posicion].coeficiente += producto.peso
              
            }
            if (estaAnyadido === false) {
              this.pedidosAmigosAgrupados.push({ producto: producto.producto, coeficiente: producto.peso })
        
            }
          }

        })
      })
    }
    console.log(this.pedidosAmigosAgrupados)
    return this.pedidosAmigosAgrupados;
  };

  normalizarCadaPedido(pedido: any) {

    let unidadesTotales: number = 0;
    let pedidoNormalizado: any[] = [];

    for (let compra in pedido) {
      unidadesTotales += pedido[compra].unidades;
    }
    for (let compra in pedido) {
      let peso = (pedido[compra].unidades / unidadesTotales);

      pedidoNormalizado.push({ producto: pedido[compra].producto, peso: peso });
    }
 
    return (pedidoNormalizado);
  }

  ordenarPedidos(listado: any) {
    let listadoOrdenado = listado.sort(function (a, b) {
      if (a.coeficiente < b.coeficiente) {
        return 1;
      }
      if (a.coeficiente > b.coeficiente) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });

    return listadoOrdenado;
  }

  async mandarId(id:string) {
    this.dato = await this.cargarService.mandarId(id);
    let ruta = "/producto/" + id;
    this.router.navigate([ruta]);
    return this.dato;
  }


  async anyadirACesta(producto:any) {
    console.log('añadir')
    console.log(producto)
    await this.comprarService.anyadirALaCesta(producto, this.unidades);
  }

  llamarSnackbar(){
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

}