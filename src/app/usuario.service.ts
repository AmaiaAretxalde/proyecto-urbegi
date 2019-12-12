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
    console.log(puntuacionSabores);
    return puntuacionSabores;
  }

  async obtenerPuntuacionSaboresOtro() {
    this.datosUsuario = await this.http.get('/api/usuario/sabores/resto')
      .toPromise();
    return this.datosUsuario;
  }

  async obtenerPuntuacionFunciones() {
    let datos:any = await this.http.get('/api/usuario/funciones')
      .toPromise();
    let puntuacionFunciones = datos.respuesta;
    console.log(puntuacionFunciones);
    return puntuacionFunciones;
  }

  async obtenerPuntuacionFuncionesOtro() {
    this.datosUsuario = await this.http.get('/api/usuario/funciones/resto')
      .toPromise();
    return this.datosUsuario;
  }

  

}
