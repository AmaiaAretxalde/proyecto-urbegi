import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  usuario:any;

  constructor(private http: HttpClient, private route: Router) { }

  async logout(){
    this.usuario = await this.http.get('/api/logout')
    .toPromise();
    console.log('logout')
  }
}
