import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{CestaService} from '../cesta.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})

export class CestaComponent implements OnInit {
 cesta:any;
 precioTotal:number;

  constructor(public cestaService:CestaService, private route: Router) { }

  async ngOnInit() {
    this.cesta = await this.cestaService.obtenerCesta();
    this.precioTotal = this.cesta.reduce(function(total:any,actual:any){
      return total += actual.basePrice;
      }, 0)
  }

  async eliminarDeCesta(te){
    await this.cestaService.eliminarDeCesta(te)
  }

}
