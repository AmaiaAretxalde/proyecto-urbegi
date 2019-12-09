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
  cesta:[]=[]

  constructor(public cestaService:CestaService, private route: Router) { }

  async ngOnInit() {
    this.cesta = await this.cestaService.obtenerCesta();
  }

}
