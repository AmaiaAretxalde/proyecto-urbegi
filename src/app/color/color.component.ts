import { Component, OnInit, Input } from '@angular/core';
import { CargarService } from '../cargar.service';

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
  @Input() color: string;
  @Input() posicion: string;

  constructor(public cargarService: CargarService) { }

  async ngOnInit() {
    this.datos = await this.cargarService.cargarPorColor(this.color)
    console.log(this.datos)

    this.nombre = this.datos[this.posicion].name.toUpperCase();
    this.src = this.datos[this.posicion].mainImage;
    this.precio = Math.floor(this.datos[this.posicion].basePrice*100)/100;
    console.log(this.nombre)
    console.log(this.precio)
    console.log(this.src)

  }

}
