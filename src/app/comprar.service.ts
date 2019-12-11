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


  
  async anyadirALaCesta(producto:any) {
    console.log(producto)
    let teAnyadido:any = await this.http.post('/api/cesta', {producto}, { headers: { "Content-Type": "application/json" } })
    .toPromise();
    console.log(teAnyadido.logged)
    console.log(teAnyadido.mensaje)
    if(teAnyadido.logged===false){
      this.router.navigate(['../iniciosesion'])
    }
    console.log(teAnyadido)
  }

  async anyadirALaCestaDesdeColor(dato) {
    let teAnyadido:any = await this.http.post('/api/color/cesta', {dato}, { headers: { "Content-Type": "application/json" }})
    .toPromise();
    console.log(teAnyadido.logged)
    if(teAnyadido.logged===false){
      this.router.navigate(['../iniciosesion'])
    }
    console.log(teAnyadido)
  }
  

  
}
