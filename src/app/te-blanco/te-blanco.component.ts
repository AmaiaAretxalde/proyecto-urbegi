import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-te-blanco',
  templateUrl: './te-blanco.component.html',
  styleUrls: ['./te-blanco.component.css']
})
export class TeBlancoComponent implements OnInit {
  color:string = "blanco";
  constructor() { }

  ngOnInit() {
  }

}
