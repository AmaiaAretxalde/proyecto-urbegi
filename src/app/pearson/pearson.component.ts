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

  constructor(private usuarioService: UsuarioService) { }

  async ngOnInit() {
    this.misSabores = await this.usuarioService.obtenerPuntuacionSabores();
    this.misFunciones = await this.usuarioService.obtenerPuntuacionFunciones();
    console.log(this.misSabores);
    this.datos = await this.usuarioService.obtenerPuntuacionSaboresOtro();
    console.log(this.datos)
    this.datosUsuarios = this.datos.respuesta;
    console.log(this.datosUsuarios)
    this.datosUsuarios.map((usuario: any) => {
      this.saboresOtro = usuario.sabores.map((sabor: any) => {
        return sabor;
      })
      this.funcionesOtro = usuario.funciones.map((funcion: any) => {
        return funcion;
      })
      console.log(this.saboresOtro)
      console.log(this.funcionesOtro)

      let numeroSabores: number = 0;
      let numeroFunciones: number = 0;
      for (let i = 0; i < this.misSabores.length; i++) {
        numeroSabores += Math.pow((this.misSabores[i].puntuacion - this.saboresOtro[i].puntuacion), 2);
      }
      for (let i = 0; i < this.misFunciones.length; i++) {
        numeroFunciones += Math.pow((this.misFunciones[i].puntuacion - this.funcionesOtro[i].puntuacion), 2);
      }
      console.log(numeroSabores)
      console.log(numeroFunciones)
      let ds = 1 / (1 + Math.sqrt(numeroSabores))
      let df = 1 / (1 + Math.sqrt(numeroFunciones))
      console.log(ds)
      console.log(df)
      this.coeficientesSabores.push({ nombreUsuario: usuario.nombre, emailUsuario: usuario.email, coeficiente: ds });
      this.coeficientesFunciones.push({ nombreUsuario: usuario.nombre, emailUsuario: usuario.email, coeficiente: df });
      console.log(this.coeficientesSabores)
      console.log(this.coeficientesFunciones)
    })
  }

}
