import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComprarService {
  cesta:string[]=[]
  producto:string[]=[]
  constructor(public http: HttpClient) { }

  async anyadirALaCesta(producto) {
    let teAnyadido = await this.http.post('api/cesta', { cesta: this.producto }, { headers: { "Content-Type": "application/json" }, responseType: "text" })
    .toPromise();
    console.log(this.producto)
  }

}
