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
  @Input() posicion: number;

  constructor(public cargarService: CargarService) { }

  async ngOnInit() {
    this.datos = await this.cargarService.cargarNovedades(this.palabra1, this.palabra2)
    console.log(this.datos)

    this.nombre = this.datos[this.posicion].name.toUpperCase();
    this.src = this.datos[this.posicion].mainImage;
    this.precio = Math.floor(this.datos[this.posicion].basePrice*100)/100;
    console.log(this.nombre)
    console.log(this.precio)
    console.log(this.src)

  }
}


