import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CargarService } from '../cargar.service';


@Component({
  selector: 'app-te-verde',
  templateUrl: './te-verde.component.html',
  styleUrls: ['./te-verde.component.css']
})
export class TeVerdeComponent implements OnInit {
color:string = "verde";

  constructor(public router:Router) { }

  async ngOnInit() {
 
  }

}
