import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-te-rojo',
  templateUrl: './te-rojo.component.html',
  styleUrls: ['./te-rojo.component.css']
})
export class TeRojoComponent implements OnInit {
  color:string = "rojo";
  constructor() { }

  ngOnInit() {
  }

}
