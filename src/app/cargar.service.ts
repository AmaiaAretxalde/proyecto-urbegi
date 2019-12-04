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
}
