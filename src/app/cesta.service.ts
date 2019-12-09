import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CestaService {
  cesta: any;

  constructor(public http: HttpClient) { }
  async obtenerCesta() {
    this.cesta = await this.http.get('/api/cesta')
      .toPromise();
    console.log(this.cesta);
    return this.cesta;
}

async eliminarDeCesta(te){
  let productoEliminado = await this.http.delete('/api/cesta/'+te._id).toPromise();
console.log(productoEliminado)
}

  
}
