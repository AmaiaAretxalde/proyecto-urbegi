import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModificarService {
  id:string;

  constructor(public http: HttpClient) { }


  
  async modificarInfoProducto(id:string){
  /*   
    let url = '/api/modificar-producto/:id/'+ id;
    console.log(this.id)
    let response = await this.http.get(url)
    .toPromise();
    console.log(response);
    return response; */
  }
}
