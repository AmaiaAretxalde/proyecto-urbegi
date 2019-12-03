import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-te-verde',
  templateUrl: './te-verde.component.html',
  styleUrls: ['./te-verde.component.css']
})
export class TeVerdeComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

}
