import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: any = undefined;
  datosUsuario:any;
  constructor(private http: HttpClient) { }

  async estaLogueado() {
    const resp: any = await this.http.get('/api/usuario')
      .toPromise();
    if (resp.mensaje == 'denegado') {
      this.usuario = undefined;
      return undefined;
    } else {
      this.usuario = resp;
      return this.usuario;
    }
  }

  async obtenerPuntuacionSabores() {
    let datos:any = await this.http.get('/api/usuario/sabores')
      .toPromise();
    let puntuacionSabores = datos.respuesta;
    return puntuacionSabores;
  }

  async obtenerDatosOtro() {
    this.datosUsuario = await this.http.get('/api/usuario/datos/resto')
      .toPromise();
    return this.datosUsuario;
  }

  async obtenerPuntuacionFunciones() {
    let datos:any = await this.http.get('/api/usuario/funciones')
      .toPromise();
    let puntuacionFunciones = datos.respuesta;
    return puntuacionFunciones;
  }

  async obtenerPedidosAmigo(email:string) {
    let response: any = await this.http.post('/api/usuario/recomendaciones', {email},{headers:{"Content-Type":"application/json"}})
    .toPromise()
    let pedidosAmigo = response.pedidos;
    return pedidosAmigo;
  }

  async obtenerPedidosUsuario() {
    let response: any = await this.http.get('/api/usuario/productos-comprados')
    .toPromise()
    let todosMisPedidos = response.pedidos;
    let misProductosComprados=[];
    todosMisPedidos.forEach(pedido => {
      for(let i=0;i<pedido.length;i++){
        misProductosComprados.push(pedido[i].producto.id);
      }
    });
    return misProductosComprados;
  }
  

  

}
