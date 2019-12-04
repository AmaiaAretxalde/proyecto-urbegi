import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  cambiarEstimulante() {
    this.estimulante = !this.estimulante;
    console.log(this.estimulante)
  }
  cambiarDigestivo() {
    this.digestivo = !this.digestivo;
    console.log(this.digestivo)
  }
  cambiarRelajante() {
    this.relajante = !this.relajante;
    console.log(this.relajante)
  }
  cambiarAntioxidante() {
    this.antioxidante = !this.antioxidante;
    console.log(this.antioxidante)
  }
  cambiarIsotonico() {
    this.isotonico = !this.isotonico;
    console.log(this.isotonico)
  }
  cambiarDepurativo() {
    this.depurativo = !this.depurativo;
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
  }

}
