import { Component, OnInit } from '@angular/core';
import { navSlide } from 'src/assets/menu';
import { LogoutService } from '../logout.service';
import { LoginService } from '../login.service';
import {UsuarioService} from'../usuario.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  usuario: any;
  nombre: string;
  nombreMayuscula: string

  constructor(private logoutService: LogoutService, private loginservice: LoginService, private usuarioService:UsuarioService) { }

  async ngOnInit() {
    navSlide();
    this.obtenerNombre();
    this.usuario = await this.usuarioService.estaLogueado();
  }

  async logout() {
    this.usuario = await this.logoutService.logout();
  }

  obtenerNombre() {
    this.nombre = this.loginservice.obtenerNombre();
    if(this.nombre !== undefined) {
      this.nombreMayuscula = this.nombre.toUpperCase();
    }
    console.log(this.nombre)
  }


}
