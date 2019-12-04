import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  nombre: string;
  email:string;
  constructor(public http: HttpClient) { }

  async comprobarUsuario(email: string, password: string) {
    let response: any = await this.http.post('/api/usuario/login', { email, password }, { headers: { "Content-Type": "application/json" } })
      .toPromise()
    console.log(response.mensaje)
    if (response.mensaje !== 'denegado') {
      let respuesta: any = await this.http.post('/api/usuario/nombre', { email }, { headers: { "Content-Type": "application/json" } })
        .toPromise()
      this.nombre = respuesta.nombre
      console.log(this.nombre)
      return this.nombre;
    } else {
      return response.mensaje;
    }
  }

  async registrarUsuario(nombre:string, apellido:string, email:string, direccion:string, localidad:string, provincia:string, cp:string, telefono:string, password:string) {
    let response: any = await this.http.post('/api/usuario/registro', { nombre, apellido, email, direccion, localidad, provincia, cp, telefono, password },{headers:{"Content-Type":"application/json"}})
      .toPromise()
      this.email=response.email;
      console.log(response.mensaje)
    return response.mensaje;
  }

  async anayadirSaborUsuario(email:string, sabores:string[]) {
    let response: any = await this.http.post('/api/usuario/registro/gustos', {email, sabores},{headers:{"Content-Type":"application/json"}})
      .toPromise()
      console.log(response.mensaje)
    return response.mensaje;
  }

  async anayadirFuncionUsuario(email:string, funciones:string[]) {
    let response: any = await this.http.post('/api/usuario/registro/gustos', {email, funciones},{headers:{"Content-Type":"application/json"}})
      .toPromise()
      console.log(response.mensaje)
    return response.mensaje;
  }
}
