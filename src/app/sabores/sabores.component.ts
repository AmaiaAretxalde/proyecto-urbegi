import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sabores',
  templateUrl: './sabores.component.html',
  styleUrls: ['./sabores.component.css']
})
export class SaboresComponent {
  dulce: boolean = false;
  citrico: boolean = false;
  afrutado: boolean = false;
  especiado: boolean = false;
  floral: boolean = false;
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

  constructor(public loginService: LoginService, private router: Router) { }

  cambiarDulce() {
    this.dulce = !this.dulce;
    if (this.dulce) {
      this.classDulce = "activo";
    } else {
      this.classDulce = "no-activo";
    }
    console.log(this.dulce)
    console.log(this.classDulce)

  }
  cambiarCitrico() {
    this.citrico = !this.citrico;
    if (this.citrico) {
      this.classCitrico = "activo";
    } else {
      this.classCitrico = "no-activo";
    }
    console.log(this.citrico)
  }
  cambiarAfrutado() {
    this.afrutado = !this.afrutado;
    if (this.afrutado) {
      this.classFruit = "activo";
    } else {
      this.classFruit = "no-activo";
    }
    console.log(this.afrutado)
  }
  cambiarEspeciado() {
    this.especiado = !this.especiado;
    if (this.especiado) {
      this.classEspeciado = "activo";
    } else {
      this.classEspeciado = "no-activo";
    }
    console.log(this.especiado)
  }
  cambiarFloral() {
    this.floral = !this.floral;
    if (this.floral) {
      this.classFloral = "activo";
    } else {
      this.classFloral = "no-activo";
    }
    console.log(this.floral)
  }
  guardarSabores() {
    this.saboresInicio = [
      { booleano: this.dulce, nombre: "dulce" },
      { booleano: this.citrico, nombre: "citrico" },
      { booleano: this.floral, nombre: "floral" },
      { booleano: this.afrutado, nombre: "afrutado" },
      { booleano: this.especiado, nombre: "especiado" }];

    this.saboresElegidos = this.saboresInicio.map(function (sabor) {
      if (sabor.booleano) {
        return ({ nombre: sabor.nombre, puntuacion: 1 });
      } else {
        return ({ nombre: sabor.nombre, puntuacion: 0 });
      }
    })
    this.registrarSabores();
    this.router.navigate(['../usuario/encuesta/paso2'])
  }

  async registrarSabores() {
    let response = await this.loginService.anayadirSaborUsuario(this.saboresElegidos);
    this.mensaje = response.mensaje;
    return this.mensaje;
  }

}
