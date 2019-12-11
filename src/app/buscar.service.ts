import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscarService {
  teEncontrados:any;
  constructor(public http: HttpClient) { }
  async buscarTeFuncion(buscarTe){
    this.teEncontrados = await this.http.post('/api/buscar', { buscarTe }, { headers: { "Content-Type": "application/json" } }).toPromise();
    console.log(this.teEncontrados)
  }

  enviarTesEncontrados(){
    console.log(this.teEncontrados)
    return this.teEncontrados;
  }
}
