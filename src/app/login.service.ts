import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  nombre: string;
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
}
