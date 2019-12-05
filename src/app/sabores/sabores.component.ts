import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

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
  mensaje:string;
  constructor(public loginService: LoginService) { }

  cambiarDulce() {
    this.dulce = !this.dulce;
    console.log(this.dulce)
  }
  cambiarCitrico() {
    this.citrico = !this.citrico;
    console.log(this.citrico)
  }
  cambiarAfrutado() {
    this.afrutado = !this.afrutado;
    console.log(this.afrutado)
  }
  cambiarEspeciado() {
    this.especiado = !this.especiado;
    console.log(this.especiado)
  }
  cambiarFloral() {
    this.floral = !this.floral;
    console.log(this.floral)
  }
  guardarSabores() {
    this.saboresInicio = [
      { booleano: this.dulce, nombre: "dulce" },
      { booleano: this.citrico, nombre: "citrico" },
      { booleano: this.floral, nombre: "floral" },
      { booleano: this.afrutado, nombre: "afrutado" },
      { booleano: this.especiado, nombre: "especiado" }];

    this.saboresElegidos = this.saboresInicio.filter(function (sabor) {
      if (sabor.booleano) {
        return true;
      } else {
        return false;
      }
    })
    this.registrarSabores();
  }
  
  async registrarSabores() {
    let response = await this.loginService.anayadirSaborUsuario(this.saboresElegidos);
    this.mensaje=response.mensaje;
    return this.mensaje;
  }
}
