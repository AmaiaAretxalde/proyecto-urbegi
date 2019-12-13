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

  async eliminarDeCesta(id:string) {
    let productoEliminado = await this.http.delete('/api/cesta/' + id)
    .toPromise();
    console.log(productoEliminado);
    return productoEliminado
  }

  async modificarUnidadDeCesta(id:string, unidades:number) {
    let productoRestado = await this.http.put('/api/cesta', {id, unidades},{headers:{"Content-Type":"application/json"}})
    .toPromise();
    console.log(productoRestado);
    return productoRestado;
  }

  async guardarPedido() {
    let pedido:any = await this.http.get('/api/cesta/pedido').toPromise();
    console.log(pedido)
    return pedido;
  }

}
