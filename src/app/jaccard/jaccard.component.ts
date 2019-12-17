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
  kAmigos:any[] = [];

  constructor(private usuarioService: UsuarioService) { }

  async ngOnInit() {
    await this.obtenerPedidos();
    this.kAmigos = this.calculokAmigosPedidos(this.pedidosOtroUsuario);
    console.log(this.kAmigos)

  }

  async obtenerPedidos() {
    this.misPedidos = await this.usuarioService.obtenerPedidosUsuario();
    console.log(this.misPedidos);
    this.misPedidos.forEach((pedido) => {
      let estaAnyadido: boolean = false;
      let posicion = -1;
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
    console.log(this.misPedidosAgrupados);
    this.datos = await this.usuarioService.obtenerDatosOtro();
    this.datosUsuarios = this.datos.respuesta;
    this.datosUsuarios.forEach(async (usuario: any) => {
      this.pedidosOtro = await this.usuarioService.obtenerPedidosAmigo(usuario.email);
      this.productosCompradosPorOtro = [];
      this.totalPedidos = [];
      this.pedidosOtro.forEach(pedido => {
        console.log(pedido)
        for (let i = 0; i < pedido.length; i++) {
          this.productosCompradosPorOtro.push(pedido[i].producto.id);
        }
      })
      let ij = await this.calculoIndiceJaccard(this.misPedidosAgrupados, this.productosCompradosPorOtro);
      console.log(this.misPedidosAgrupados)
      console.log(this.productosCompradosPorOtro)
      console.log(ij)
      this.pedidosOtroUsuario.push({ emailUsuario: usuario.email, pedidos: this.productosCompradosPorOtro, indice: ij });
    })
    console.log(this.pedidosOtroUsuario)
    return this.pedidosOtroUsuario;

  }

  async calculoIndiceJaccard(l1: any, l2: any) {

    let l1ul2 = l1.concat(l2);
    console.log(l1ul2);
    let l1ul2Unicos = l1ul2.filter(function (value, index, self) {
      return self.indexOf(value) === index;
    });

    console.log(l1ul2Unicos);
    let denominador = l1ul2Unicos.length;

    let l1l2: string[] = [];
    l1.forEach((pedido: any) => {

      for (let j = 0; j < l2.length; j++) {
        if (pedido === l2[j]) {
          l1l2.push(l2[j]);
        }
      }
    })
    console.log(l1l2)
    let numerador = l1l2.length;
    let ij = numerador / denominador;

    console.log(`numerador ${numerador}`)
    console.log(`denominador ${denominador}`)
    return ij;
  }

  calculokAmigosPedidos(listado:any[]){
   listado= listado.sort(function (a, b) {
      if (a.indice < b.indice) {
        return 1;
      }
      if (a.indice > b.indice) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });

    while (listado.length > this.k) {
      listado.pop();
    }
    console.log('el listado ordenado supuestamente: ' , listado)
    return listado;
  }
}

