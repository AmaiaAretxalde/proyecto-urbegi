import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-encuesta3',
  templateUrl: './encuesta3.component.html',
  styleUrls: ['./encuesta3.component.css']
})
export class Encuesta3Component {

  constructor(private router: Router) { }

  irAInicio() {
    this.router.navigate(['../usuario'])

    
  }

}
