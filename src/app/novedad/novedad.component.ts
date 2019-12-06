import { Component, OnInit, Input } from '@angular/core';
import { CargarService } from '../cargar.service';

@Component({
  selector: 'app-novedad',
  templateUrl: './novedad.component.html',
  styleUrls: ['./novedad.component.css']
})
export class NovedadComponent implements OnInit {
  src: string = '';
  nombre: string = '';
  precio: Number;
  palabra1: string = 'navidad';
  palabra2: string = 'Christmas';
  datos: any;
  id:string;
  ruta:string;
  @Input() posicion: number;

  constructor(public cargarService: CargarService) { }

  async ngOnInit() {
    this.datos = await this.cargarService.cargarNovedades(this.palabra1, this.palabra2)

    this.nombre = this.datos[this.posicion].name.toUpperCase();
    this.src = this.datos[this.posicion].mainImage;
    this.precio = Math.floor(this.datos[this.posicion].basePrice*100)/100;
    this.id = this.datos[this.posicion].id;
    this.ruta = "/producto/" + this.id;
  

  }
}


