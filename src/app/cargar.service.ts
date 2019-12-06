import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CargarService {

  constructor(public http: HttpClient) { }

  async cargarNovedades(palabra1:string, palabra2:string){
    let response = await this.http.post('/api/cargar/novedades', { palabra1, palabra2 }, { headers: { "Content-Type": "application/json" } })
    .toPromise();
    console.log(response);
    return response;
  }

  async cargarPorColor(color:string){
    let url = '/api/cargar/'+ color;
    let response = await this.http.get(url)
    .toPromise();
    console.log(response);
    return response;
  }

  async cargarInfoPorTipo(tipo:string){
    let url = '/api/cargar/info/'+ tipo;
    let response = await this.http.get(url)
    .toPromise();
    console.log(response);
    return response;
  }

  async cargarInfoProducto(id:string){
    let url = '/api/cargar/producto/'+ id;
    let response = await this.http.get(url)
    .toPromise();
    console.log(response);
    return response;
  }
}
