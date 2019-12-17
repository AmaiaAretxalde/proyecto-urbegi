import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

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

  constructor(private usuarioService: UsuarioService) { }

  async ngOnInit() {
    let misPedidos:any = await this.obtenerMisPedidos();
    let pedidosOtros:any = await this.obtenerPedidosOtros();

     this.kAmigos = this.calculokAmigosPedidos(pedidosOtros);
     console.log(this.kAmigos)

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
  
      for(let j=0;j<this.datosUsuarios.length;j++){
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

}
