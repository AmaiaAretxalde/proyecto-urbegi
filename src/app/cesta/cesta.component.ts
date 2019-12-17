import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{CestaService} from '../cesta.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})

export class CestaComponent implements OnInit {
 cesta:any;
 precios: any;
 precioTotal:number = 0;
 precioTotalRedondo:string;
 unidades:number= 1;

  constructor(public cestaService:CestaService, private route: Router) { }

  async ngOnInit() {
    this.cesta = await this.cestaService.obtenerCesta();
    console.log(this.cesta.length)
    if(this.cesta.length!==0){

      this.precios = this.cesta.map((te:any)=>{
        return parseFloat((te.producto.basePrice*te.unidades).toFixed(2));
      })
  
      this.precioTotal = this.precios.reduce(function(total:number, actual:number){
        total+=actual;
        
        return total;
      })
    }
    this.precioTotalRedondo=this.precioTotal.toFixed(2);
    console.log(this.precioTotal)
    console.log(this.precioTotalRedondo)
  }
 
  async eliminarDeCesta(id:string){
    await this.cestaService.eliminarDeCesta(id);
    this.cesta = await this.cestaService.obtenerCesta();
    if(this.cesta.length!==0){

      this.precios = this.cesta.map((te:any)=>{
        return parseFloat((te.producto.basePrice*te.unidades).toFixed(2));
      })
  
      this.precioTotal = this.precios.reduce(function(total:number, actual:number){
        total+=actual;
        return total;
      })
    }
    this.precioTotalRedondo=this.precioTotal.toFixed(2);
  }

  async restarUnidad(id:string){
    await this.cestaService.modificarUnidadDeCesta(id, -this.unidades)
    this.cesta = await this.cestaService.obtenerCesta();
    if(this.cesta.length!==0){

      this.precios = this.cesta.map((te:any)=>{
        return parseFloat((te.producto.basePrice*te.unidades).toFixed(2));
      })
  
      this.precioTotal = this.precios.reduce(function(total:number, actual:number){
        total+=actual;
        return total;
      })
    }
    this.precioTotalRedondo=this.precioTotal.toFixed(2);
  }

  async sumarUnidad(id:string){
    await this.cestaService.modificarUnidadDeCesta(id, this.unidades)
    this.cesta = await this.cestaService.obtenerCesta();
    if(this.cesta.length!==0){

      this.precios = this.cesta.map((te:any)=>{
        return parseFloat((te.producto.basePrice*te.unidades).toFixed(2));
      })
  
      this.precioTotal = this.precios.reduce(function(total:number, actual:number){
        total+=actual;
        return total;
      })
    }
    this.precioTotalRedondo=this.precioTotal.toFixed(2);
  }

  async guardarPedido(){
    console.log('guardando');
    let a = await this.cestaService.guardarPedido();
    this.cesta = await this.cestaService.obtenerCesta();
    if(this.cesta.length===0 || this.cesta===undefined){
    this.precioTotalRedondo = "0.00";
    }

  }
  
  llamarSnackbar(){
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

}
