import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComprarService {
  cesta:any;
  producto:any;
  constructor(public http: HttpClient) { }

  async anyadirALaCesta(producto) {
    let teAnyadido = await this.http.post('/api/cesta', {producto}, { headers: { "Content-Type": "application/json" }, responseType: "text" })
    .toPromise();
    await console.log(this.cesta)
  }

  async anyadirALaCestaDesdeColor(dato) {
    let teAnyadido = await this.http.post('/api/color/cesta', {dato}, { headers: { "Content-Type": "application/json" }, responseType: "text" })
    .toPromise();
    await console.log(this.cesta)
  }

}
