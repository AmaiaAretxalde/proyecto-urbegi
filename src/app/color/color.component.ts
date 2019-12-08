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
  id: string;
  @Input() color: string;
  dato: string;
  ruta: string;
  position:number;


  constructor(public cargarService: CargarService, private router: Router) { }

  async ngOnInit() {
    this.datos = await this.cargarService.cargarPorColor(this.color);
    this.id= this.datos[this.position].id;
    console.log(this.id)
    this.ruta = "/producto/" + this.id;
  }

  buscarId() {


  }
  async mandarId() {

    this.dato = await this.cargarService.mandarId(this.id);
    this.router.navigate([this.ruta])
    return this.dato;
  }
}
