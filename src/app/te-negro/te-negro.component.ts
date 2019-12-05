import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-te-negro',
  templateUrl: './te-negro.component.html',
  styleUrls: ['./te-negro.component.css']
})
export class TeNegroComponent implements OnInit {
  color:string = "negro";
  constructor() { }

  ngOnInit() {
  }

}
