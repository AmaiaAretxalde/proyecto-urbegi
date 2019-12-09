import { Component, OnInit, Input } from '@angular/core';
import { CargarService } from '../cargar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  src: string = '';
  nombre: string = '';
  precio: Number;
  datos: any;
  // id: string;
  @Input() color: string;
  dato: string;
  ruta: string;
  position:number;


  constructor(public cargarService: CargarService, private router: Router) { }

  async ngOnInit() {
    this.datos = await this.cargarService.cargarPorColor(this.color);
  }

  async mandarId(id:string) {
    this.dato = await this.cargarService.mandarId(id);
    this.ruta = "/producto/" + this.dato;
    this.router.navigate([this.ruta])
    return this.dato;
  }
}
