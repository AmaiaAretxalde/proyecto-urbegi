import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-funciones',
  templateUrl: './funciones.component.html',
  styleUrls: ['./funciones.component.css']
})
export class FuncionesComponent {
  puntuacionEstimulante: number;
  puntuacionDigestivo: number;
  puntuacionRelajante: number;
  puntuacionAntioxidante: number;
  puntuacionIsotonico: number;
  puntuacionDepurativo: number;
  funcionesElegidas:any[]=[];
  nombre:string;
  mensaje:string;
  classEstimulante:string;
  classDigestivo:string;
  classRelajante:string;
  classAntioxidante:string;
  classIsotonico:string;
  classDepurativo:string;

  constructor(public loginService: LoginService, private router: Router) { }

  guardarFunciones(){
    this.funcionesElegidas =[
      {nombre:"estimulante", puntuacion:this.puntuacionEstimulante},
      {nombre:"digestivo", puntuacion:this.puntuacionDigestivo},
      {nombre:"relajante", puntuacion:this.puntuacionRelajante},
      {nombre:"antioxidante", puntuacion:this.puntuacionAntioxidante},
      {nombre:"isotonico", puntuacion:this.puntuacionIsotonico},
      {nombre:"depurativo", puntuacion:this.puntuacionDepurativo}]
      
    this.registrarFunciones();
    this.router.navigate(['../usuario/encuesta/paso3'])
  }

  async registrarFunciones() {
    let response = await this.loginService.anayadirFuncionUsuario(this.funcionesElegidas);
    this.mensaje=response.mensaje;
    return this.mensaje;
  }

}
