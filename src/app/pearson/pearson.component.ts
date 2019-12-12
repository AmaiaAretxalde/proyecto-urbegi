import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-pearson',
  templateUrl: './pearson.component.html',
  styleUrls: ['./pearson.component.css']
})
export class PearsonComponent implements OnInit {
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
  coeficientesGlobales: any[] = [];
  pedidosAmigo:any;
  pedidosAmigos: any[] = [];

  constructor(private usuarioService: UsuarioService) { }

  async ngOnInit() {

    await this.calculokAmigosSabores();
    await this.calculokAmigosFunciones();
    await this.calculokMejoresAmigos();
    this.coeficientesGlobales.map(async (amigo)=>{
     console.log(amigo.emailUsuario)
      // this.pedidosAmigo = await this.usuarioService.obtenerPedidosAmigo(amigo.emailUsuario);
      // console.log(this.pedidosAmigo)
  //     this.pedidosAmigos.push(this.pedidosAmigo)
     })
  //   console.log(this.pedidosAmigos)

   }

  async calculokAmigosSabores() {
    this.misSabores = await this.usuarioService.obtenerPuntuacionSabores();
    this.datos = await this.usuarioService.obtenerDatosOtro();
    this.datosUsuarios = this.datos.respuesta;
    this.datosUsuarios.map((usuario: any) => {
      this.saboresOtro = usuario.sabores.map((sabor: any) => {
        return sabor;
      })
      let numeroSabores: number = 0;

      for (let i = 0; i < this.misSabores.length; i++) {
        numeroSabores += Math.pow((this.misSabores[i].puntuacion - this.saboresOtro[i].puntuacion), 2);
      }
      let ds = 1 / (1 + Math.sqrt(numeroSabores))
      this.coeficientesSabores.push({ nombreUsuario: usuario.nombre, emailUsuario: usuario.email, coeficiente: ds });
    })

    this.kAmigosSabores = this.coeficientesSabores;

    console.log(this.kAmigosSabores)

  }

  async calculokAmigosFunciones() {

    this.misFunciones = await this.usuarioService.obtenerPuntuacionFunciones();

    this.datos = await this.usuarioService.obtenerDatosOtro();
    this.datosUsuarios = this.datos.respuesta;
    this.datosUsuarios.map((usuario: any) => {
      this.funcionesOtro = usuario.funciones.map((funcion: any) => {
        return funcion;
      })
      let numeroFunciones: number = 0;
      for (let i = 0; i < this.misFunciones.length; i++) {
        numeroFunciones += Math.pow((this.misFunciones[i].puntuacion - this.funcionesOtro[i].puntuacion), 2);
      }
      let df = 1 / (1 + Math.sqrt(numeroFunciones))
      this.coeficientesFunciones.push({ nombreUsuario: usuario.nombre, emailUsuario: usuario.email, coeficiente: df });
    })

    this.kAmigosFunciones = this.coeficientesFunciones;

    console.log(this.kAmigosFunciones)

  }

  calculokMejoresAmigos() {
    let coeficienteGlobal: number = 0;
    for (let i = 0; i < this.kAmigosSabores.length; i++) {
      for (let j = 0; j < this.kAmigosFunciones.length; j++) {
        if (this.kAmigosFunciones[j].emailUsuario === this.kAmigosSabores[i].emailUsuario) {
          this.coeficienteGlobal = (this.kAmigosFunciones[j].coeficiente + this.kAmigosSabores[i].coeficiente) / 2;
          this.coeficientesGlobales.push({ nombreUsuario: this.kAmigosFunciones[j].nombreUsuario, emailUsuario: this.kAmigosFunciones[j].emailUsuario, coeficienteGlobal: this.coeficienteGlobal });
        }
      }
    }

    console.log(this.coeficientesGlobales);
    
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
    console.log(this.coeficientesGlobales);
  }

}
