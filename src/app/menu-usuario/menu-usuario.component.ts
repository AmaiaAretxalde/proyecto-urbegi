import { Component, OnInit } from '@angular/core';
import { navSlide } from 'src/assets/menu';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-menu-usuario',
  templateUrl: './menu-usuario.component.html',
  styleUrls: ['./menu-usuario.component.css']
})
export class MenuUsuarioComponent implements OnInit {
  nombre: string;
  nombreMayuscula: string
  constructor(public loginservice: LoginService) { }

  ngOnInit() {
    navSlide();
    this.obtenerNombre();
  }

  obtenerNombre() {
    this.nombre = this.loginservice.obtenerNombre();
    this.nombreMayuscula = this.nombre.toUpperCase();
    console.log(this.nombre)
  }

}
