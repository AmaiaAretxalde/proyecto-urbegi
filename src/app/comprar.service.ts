import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ObjectUnsubscribedError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComprarService {
  cesta:string[]=[]
  constructor(public http: HttpClient) { }

  async anyadirALaCesta() {
    let teAnyadido = this.http.post('api/cesta', { cesta:this.cesta }, { headers: { "Content-Type": "application/json" }, responseType: "text" }).toPromise();

  }

}
