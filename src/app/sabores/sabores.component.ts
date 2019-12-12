import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sabores',
  templateUrl: './sabores.component.html',
  styleUrls: ['./sabores.component.css']
})
export class SaboresComponent {
 
  saboresInicio: any[] = [];
  saboresElegidos: any[] = [];
  nombre: string;
  email: string;
  mensaje: string;
  classDulce: string;
  classCitrico: string;
  classFruit: string;
  classFloral: string;
  classEspeciado: string;
  puntuacionDulce:number;
  puntuacionCitrico:number;
  puntuacionFloral:number;
  puntuacionEspeciado:number;
  puntuacionFruit:number;

  constructor(public loginService: LoginService, private router: Router) { }

  guardarSabores() {
    this.saboresElegidos = [
      { nombre: "Dulce", puntuacion: this.puntuacionDulce },
      { nombre: "Cítrico", puntuacion: this.puntuacionCitrico },
      { nombre: "Floral", puntuacion: this.puntuacionFloral },
      { nombre: "Especiado", puntuacion: this.puntuacionEspeciado },
      { nombre: "Afrutado", puntuacion: this.puntuacionFruit }];

    this.registrarSabores();
    this.router.navigate(['../usuario/encuesta/paso2'])
  }

  async registrarSabores() {
    let response = await this.loginService.anayadirSaborUsuario(this.saboresElegidos);
    this.mensaje = response.mensaje;
    return this.mensaje;
  }

}
