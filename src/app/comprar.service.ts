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
    console.log(producto)
    let teAnyadido = await this.http.post('/api/cesta', {producto}, { headers: { "Content-Type": "application/json" } })
    .toPromise();
    console.log(teAnyadido)
  }

}
