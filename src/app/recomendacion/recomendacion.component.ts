import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-recomendacion',
  templateUrl: './recomendacion.component.html',
  styleUrls: ['./recomendacion.component.css']
})
export class RecomendacionComponent  {
  datos:any;
  sabores:string[];
  funciones:string[];
  constructor(public loginService:LoginService) { }

  // async ngOnInit() {
  //   this.datos = await this.loginService.buscarGustos();
  //   console.log(this.datos);
  //   this.sabores = this.datos[0].sabores;
  //   this.funciones = this.datos[0].funciones;
  // }

  // async recomendar() {
  //   this.datos = await this.loginService.buscarGustos();
  //   console.log(this.datos);
  //   this.sabores = this.datos[0].sabores;
  //   this.funciones = this.datos[0].funciones;
  // }


}
