import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ComprarService {
  cesta:any;
  producto:any;
  constructor(public http: HttpClient, public router:Router) { }


  
  async anyadirALaCesta(producto:any, unidades:number) {
    console.log(producto)
    let teAnyadido:any = await this.http.post('/api/cesta', {producto, unidades}, { headers: { "Content-Type": "application/json" } })
    .toPromise();
    console.log(teAnyadido.logged)
    console.log(teAnyadido.mensaje)
    if(teAnyadido.logged===false){
      this.router.navigate(['../iniciosesion'])
    }
    console.log(teAnyadido)
  }

  // async anyadirALaCestaDesdeColor(dato) {
  //   let teAnyadido:any = await this.http.post('/api/cesta/color', {dato}, { headers: { "Content-Type": "application/json" }})
  //   .toPromise();
  //   console.log(teAnyadido.logged)
  //   if(teAnyadido.logged===false){
  //     this.router.navigate(['../iniciosesion'])
  //   }
  //   console.log(teAnyadido)
  // }
  
}
