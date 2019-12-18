import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { CargarService } from '../cargar.service';
import { Router } from '@angular/router';
import { ComprarService } from '../comprar.service';


@Component({
  selector: 'app-pearson',
  templateUrl: './pearson.component.html',
  styleUrls: ['./pearson.component.css']
})
export class PearsonComponent implements OnInit {
  images:string[] = ['https://placedog.net/500/280', 'https://placedog.net/400/380', 'https://placedog.net/500/280'];
  misSabores: any;
  misFunciones: any;
  datos: any;
  datosUsuarios: any;
  saboresOtro: any;
  funcionesOtro: any;
  coeficientesSabores: any[] = [];
  coeficientesFunciones: any[] = [];
  kAmigosSabores: any[] = [];
  kAmigosFunciones: any[] = [];
  k: number = 4;
  coeficienteGlobal: number = 0;
  coeficienteTotal: number = 0;
  coeficientesGlobales: any[] = [];
  pedidosAmigo: any;
  pedidosAmigos: any[] = [];
  pedidosAmigosAgrupados: any[] = [];
  kMejoresAmigos: any[] = [];
  productosRecomendados: any[] = [];
  dato:any;
  unidades:number = 1;
  numeroRecomendaciones:number = 8;

  constructor(private usuarioService: UsuarioService, private cargarService:CargarService, private router: Router, private comprarService: ComprarService) { }

  async ngOnInit() {

    await this.calculokAmigosSabores();
    await this.calculokAmigosFunciones();
    await this.calculokMejoresAmigos();
    await this.obtenerPedidosAmigo();

  }

  async calculokAmigosSabores() {
    this.misSabores = await this.usuarioService.obtenerPuntuacionSabores();
    // console.log(this.misSabores)
    this.datos = await this.usuarioService.obtenerDatosOtro();
    this.datosUsuarios = this.datos.respuesta;
    this.datosUsuarios.map((usuario: any) => {
      this.saboresOtro = usuario.sabores.map((sabor: any) => {
        return sabor;
      })
      let numeroSabores: number = 0;

      for (let i = 0; i < this.misSabores.length; i++) {
        // console.log(this.misSabores[i], i, usuario.nombre)
        // console.log(this.saboresOtro[i], i, usuario.nombre)
        numeroSabores += Math.pow((this.misSabores[i].puntuacion - this.saboresOtro[i].puntuacion), 2);
      }
      let ds = 1 / (1 + Math.sqrt(numeroSabores))
      this.coeficientesSabores.push({ emailUsuario: usuario.email, coeficiente: ds });
    })

    this.kAmigosSabores = this.coeficientesSabores;

    // console.log(this.kAmigosSabores)

  }

  async calculokAmigosFunciones() {
    this.misFunciones = await this.usuarioService.obtenerPuntuacionFunciones();
// console.log(this.misFunciones)
    this.datos = await this.usuarioService.obtenerDatosOtro();
    this.datosUsuarios = this.datos.respuesta;
    this.datosUsuarios.map((usuario: any) => {
      this.funcionesOtro = usuario.funciones.map((funcion: any) => {
        return funcion;
      })
      let numeroFunciones: number = 0;
      for (let i = 0; i < this.misFunciones.length; i++) {
        // console.log(this.misFunciones[i], i, usuario.nombre)
        // console.log(this.funcionesOtro[i], i, usuario.nombre)
        numeroFunciones += Math.pow((this.misFunciones[i].puntuacion - this.funcionesOtro[i].puntuacion), 2);
      }
      let df = 1 / (1 + Math.sqrt(numeroFunciones))
      this.coeficientesFunciones.push({ emailUsuario: usuario.email, coeficiente: df });
    })

    this.kAmigosFunciones = this.coeficientesFunciones;

    // console.log(this.kAmigosFunciones)

  }

  calculokMejoresAmigos() {
    let coeficienteGlobal: number = 0;
    for (let i = 0; i < this.kAmigosSabores.length; i++) {
      for (let j = 0; j < this.kAmigosFunciones.length; j++) {
        if (this.kAmigosFunciones[j].emailUsuario === this.kAmigosSabores[i].emailUsuario) {
          this.coeficienteGlobal = (this.kAmigosFunciones[j].coeficiente + this.kAmigosSabores[i].coeficiente) / 2;
          this.coeficientesGlobales.push({ emailUsuario: this.kAmigosFunciones[j].emailUsuario, coeficienteGlobal: this.coeficienteGlobal });
        }
      }
    }

    // console.log(this.coeficientesGlobales);

    this.coeficientesGlobales.sort(function (a, b) {
      if (a.coeficienteGlobal < b.coeficienteGlobal) {
        return 1;
      }
      if (a.coeficienteGlobal > b.coeficienteGlobal) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });

    while (this.coeficientesGlobales.length > this.k) {
      this.coeficientesGlobales.pop();
    }
    this.kMejoresAmigos = this.coeficientesGlobales;
    // console.log(this.kMejoresAmigos);
  }

  async obtenerPedidosAmigo() {
    let coeficientes = this.kMejoresAmigos.map((kamigo) => {
      return kamigo.coeficienteGlobal;
    })

    this.coeficienteTotal = coeficientes.reduce(function (total: number, actual: number) {
      total += actual;
      return total;
    })

    this.kMejoresAmigos.forEach(async (amigo) => {
      this.pedidosAmigo = await this.usuarioService.obtenerPedidosAmigo(amigo.emailUsuario);
      this.pedidosAmigo.forEach((pedido: any) => {
        let pedidoNormalizado: any = this.normalizarCadaPedido(pedido, amigo);
        pedidoNormalizado.forEach((producto: any) => {
          this.pedidosAmigos.push({ producto: producto.producto, coeficiente: producto.peso })
          let estaAnyadido: boolean = false;
          let posicion = -1;
          if (this.pedidosAmigosAgrupados.length === 0) {
             this.pedidosAmigosAgrupados.push({ producto: producto.producto, coeficiente: producto.peso })
            // estaAnyadido = false;
          } else {
            for (let i = 0; i < this.pedidosAmigosAgrupados.length; i++) {
              if (producto.producto.id === this.pedidosAmigosAgrupados[i].producto.id) {
                posicion = i;
                estaAnyadido = true;
              }
            }
            if (estaAnyadido === true) {
              // console.log(posicion)
              this.pedidosAmigosAgrupados[posicion].coeficiente += producto.peso
            } 
            if (estaAnyadido === false) {
              this.pedidosAmigosAgrupados.push({ producto: producto.producto, coeficiente: producto.peso })
            }
          }
        })

        this.pedidosAmigosAgrupados.sort(function (a, b) {
          if (a.coeficiente < b.coeficiente) {
            return 1;
          }
          if (a.coeficiente > b.coeficiente) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
        while (this.pedidosAmigosAgrupados.length > this.numeroRecomendaciones) {
          this.pedidosAmigosAgrupados.pop();
        }
        // console.log(this.pedidosAmigosAgrupados)
      })

    })
  };

  normalizarCadaPedido(pedido: any, amigo: any) {

    let unidadesTotales: number = 0;
    let pedidoNormalizado: any[] = [];

    for (let compra in pedido) {
      unidadesTotales += pedido[compra].unidades;
    }
    for (let compra in pedido) {
      let peso = (pedido[compra].unidades / unidadesTotales);
      let pesoPonderado = peso * (amigo.coeficienteGlobal / this.coeficienteTotal) / this.pedidosAmigo.length;
      pedidoNormalizado.push({ producto: pedido[compra].producto, peso: pesoPonderado });
    }
    // console.log(pedidoNormalizado)
    return (pedidoNormalizado);
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

