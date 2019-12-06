import { Component, OnInit } from '@angular/core';
import  {navSlide} from 'src/assets/menu';
@Component({
  selector: 'app-menu-usuario',
  templateUrl: './menu-usuario.component.html',
  styleUrls: ['./menu-usuario.component.css']
})
export class MenuUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    navSlide();
  }

}
