import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario:any = undefined;

  constructor( private http: HttpClient ) { }

  async estaLogueado(){
    const resp:any = await this.http.get('/api/usuario')
    .toPromise(); 
    if(resp.mensaje == 'denegado') {
      this.usuario = undefined;
      return undefined;
    } else {
      this.usuario = resp;
      return this.usuario;
    }
  }
}
