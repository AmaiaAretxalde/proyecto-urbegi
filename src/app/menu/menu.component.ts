import { Component, OnInit, ɵConsole } from '@angular/core';
import { navSlide } from 'src/assets/menu';
import { LogoutService } from '../logout.service';
import { LoginService } from '../login.service';
import {UsuarioService} from'../usuario.service';
import {NgForm} from '@angular/forms';
import {BuscarService} from '../buscar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  usuario: any;
  nombre: string;
  nombreMayuscula: string;
  isAdmin: boolean =false
  buscarTe:string;


  constructor(private logoutService: LogoutService, private loginservice: LoginService, private usuarioService:UsuarioService, private buscarService:BuscarService, private router: Router) { }

  async ngOnInit() {
    navSlide();
    this.obtenerNombre();
    this.usuario = await this.usuarioService.estaLogueado();
    this.isAdmin=this.loginservice.checkIsAdmin()
  }

  async logout() {
    this.usuario = await this.logoutService.logout();
    this.router.navigate(['../'])
  }

  
  async obtenerNombre() {
    this.nombre = await this.loginservice.obtenerNombre();
    if(this.nombre !== undefined) {
      this.nombreMayuscula = this.nombre.toUpperCase();
    }
    console.log(this.nombre)
  }
  
  async buscarTeFuncion(){
    let buscarElTe = await this.buscarService.buscarTeFuncion(this.buscarTe)
    console.log(this.buscarTe +' buscar un te')
    this.router.navigate(['../busqueda', this.buscarTe])
  }

}
