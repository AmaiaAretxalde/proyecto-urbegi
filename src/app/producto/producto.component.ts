import { Component, OnInit } from '@angular/core';
import { CargarService } from '../cargar.service';
import { ComprarService } from '../comprar.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  producto: any;
  id: string;
  nombre: string;
  descripcion: string;
  longDescription: string[] = [];
  unidades: number;
  precio: number;
  precioTotal: number;
  iconoAroma: string;
  aroma: string;
  iconoSabor: string;
  sabor: string;
  iconoColor: string;
  color: string;
  src: string;


  constructor(public cargarService: CargarService, public comprarService: ComprarService, private router: Router) { }


  async ngOnInit() {

    this.id = await this.cargarService.pasarId();
    this.producto = await this.cargarService.cargarInfoProducto(this.id);
    console.log(this.producto);
    if (this.producto.mensaje ==="404") {
      this.router.navigate(['../error404']);
    } else {
      this.src = this.producto[0].mainImage;
      this.nombre = this.producto[0].name;
      this.precio = this.producto[0].basePrice
      this.descripcion = this.producto[0].descripcion;
      this.longDescription = this.producto[0].longDescription;
      this.precioTotal = Math.floor(this.unidades * this.precio / 100) * 100;
      this.iconoAroma = this.producto[0].caracteristicas.aroma.image;
      this.aroma = this.producto[0].caracteristicas.aroma.texto;
      this.iconoSabor = this.producto[0].caracteristicas.sabor.image;
      this.sabor = this.producto[0].caracteristicas.sabor.texto;
      this.iconoColor = this.producto[0].caracteristicas.color.image;
      this.color = this.producto[0].caracteristicas.color.texto;
    }
  }

  async anyadirACestaDesdeProducto() {
    await this.comprarService.anyadirALaCesta(this.producto);

  }
}
