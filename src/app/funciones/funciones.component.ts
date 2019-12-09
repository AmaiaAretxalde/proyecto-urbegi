import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-funciones',
  templateUrl: './funciones.component.html',
  styleUrls: ['./funciones.component.css']
})
export class FuncionesComponent {
  estimulante: boolean = false;
  digestivo: boolean = false;
  relajante: boolean = false;
  antioxidante: boolean = false;
  isotonico: boolean = false;
  depurativo: boolean = false;
  funcionesInicio:any[]=[];
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

  cambiarEstimulante() {
    this.estimulante = !this.estimulante;
    if(this.estimulante){
      this.classEstimulante="activo";
    }else{
      this.classEstimulante="no-activo";
    }
    console.log(this.estimulante)
  }
  cambiarDigestivo() {
    this.digestivo = !this.digestivo;
    if(this.digestivo){
      this.classDigestivo="activo";
    }else{
      this.classDigestivo="no-activo";
    }
    console.log(this.digestivo)
  }
  cambiarRelajante() {
    this.relajante = !this.relajante;
    if(this.relajante){
      this.classRelajante="activo";
    }else{
      this.classRelajante="no-activo";
    }
    console.log(this.relajante)
  }
  cambiarAntioxidante() {
    this.antioxidante = !this.antioxidante;
    if(this.antioxidante){
      this.classAntioxidante="activo";
    }else{
      this.classAntioxidante="no-activo";
    }
    console.log(this.antioxidante)
  }
  cambiarIsotonico() {
    this.isotonico = !this.isotonico;
    if(this.isotonico){
      this.classIsotonico="activo";
    }else{
      this.classIsotonico="no-activo";
    }
    console.log(this.isotonico)
  }
  cambiarDepurativo() {
    this.depurativo = !this.depurativo;
    if(this.depurativo){
      this.classDepurativo="activo";
    }else{
      this.classDepurativo="no-activo";
    }
    console.log(this.depurativo)
  }

  guardarFunciones(){
    this.funcionesInicio =[
      {booleano:this.estimulante, nombre:"estimulante"},
      {booleano:this.digestivo, nombre:"digestivo"},
      {booleano:this.relajante, nombre:"relajante"},
      {booleano:this.antioxidante, nombre:"antioxidante"},
      {booleano:this.isotonico, nombre:"isotonico"},
      {booleano:this.depurativo, nombre:"depurativo"}];

    this.funcionesElegidas = this.funcionesInicio.filter(function(funcion){
      if(funcion.booleano){
        return true;
      }else{
        return false;
      }
    })
    this.registrarFunciones();
    this.router.navigate(['../usuario/encuesta/paso3'])
  }

  async registrarFunciones() {
    let response = await this.loginService.anayadirFuncionUsuario(this.funcionesElegidas);
    this.mensaje=response.mensaje;
    return this.mensaje;
  }

}
