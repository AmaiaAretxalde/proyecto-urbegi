import { Component, OnInit } from '@angular/core';
import { CargarService } from '../cargar.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  producto:any;
  id:string="1";
  nombre:string;
  descripcion:string;
  longDescription:string[] = [];
  unidades:number;
  precio:number;
  precioTotal:number;
  iconoAroma:string;
  aroma:string;
  iconoSabor:string;
  sabor:string;
  iconoColor:string;
  color:string;
  constructor(public cargarService:CargarService) { }

  async ngOnInit() {
    this.producto = await this.cargarService.cargarInfoProducto(this.id)
    console.log(this.producto)
    this.nombre = this.producto[0].name;
    this.precio = this.producto[0].basePrice
    this.descripcion = this.producto[0].descripcion;
    this.longDescription = this.producto[0].longDescription;
    this.precioTotal = Math.floor(this.unidades*this.precio/100)*100;
    this.iconoAroma = this.producto[0].caracteristicas.aroma.image;
    this.aroma = this.producto[0].caracteristicas.aroma.texto;
    this.iconoSabor = this.producto[0].caracteristicas.sabor.image;
    this.sabor = this.producto[0].caracteristicas.sabor.texto;
    this.iconoColor = this.producto[0].caracteristicas.color.image;
    this.color = this.producto[0].caracteristicas.color.texto;

    console.log(this.iconoSabor)
  }

}
