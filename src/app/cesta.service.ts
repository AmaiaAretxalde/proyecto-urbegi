import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CestaService {

  constructor(public http: HttpClient) { }
  async obtenerCesta() {
    let cesta: any = await this.http.get('/api/cesta')
      .toPromise();
    console.log(cesta);
    return cesta;
}

  
}
