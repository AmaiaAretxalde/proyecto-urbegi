import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  email: string = "";
  password: string = "";
  mensaje: string = "";
  nombre: string = '';
  montado:boolean = true;

  constructor(public loginService: LoginService, private router: Router) { }


  async comprobarUsuario() {
    this.mensaje = await this.loginService.comprobarUsuario(this.email, this.password);
    console.log(this.mensaje)
    if (this.mensaje === "denegado") {
      location.reload(); 
    } else {
      this.nombre = this.mensaje
      this.router.navigate(['../inicioUsuario'])
    }
  }
}
