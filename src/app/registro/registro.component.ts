import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  nombre: string = "";
  apellido: string = "";
  email: string = "";
  direccion: string = "";
  localidad: string = "";
  provincia: string = "";
  cp: string = "";
  telefono: string = "";
  password: string = "";
  mensaje: string = "";
  constructor(public loginService: LoginService, private router: Router) { }

  async registrarUsuario() {
    this.mensaje = await this.loginService.registrarUsuario(this.nombre, this.apellido, this.email, this.direccion, this.localidad, this.provincia, this.cp, this.telefono, this.password)
    console.log(this.mensaje)
    if (this.mensaje === 'Usuario registrado correctamente')
      this.router.navigate(['../usuario/encuesta'])
  }

}
