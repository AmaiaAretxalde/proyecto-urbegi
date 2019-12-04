import { Component, OnInit } from '@angular/core';
import  {navSlide} from 'src/assets/menu';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    navSlide();
  }

  

}
