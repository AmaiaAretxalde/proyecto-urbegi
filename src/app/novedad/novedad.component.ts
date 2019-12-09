import { Component, OnInit, Input } from '@angular/core';
import { CargarService } from '../cargar.service';
<<<<<<< HEAD
import { ComprarService } from '../comprar.service';
=======
import {Router} from "@angular/router";
>>>>>>> amaia

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
<<<<<<< HEAD


  producto:string[]=[]
  cesta:string[]=[]

  @Input() posicion: number;

  constructor(public cargarService: CargarService, private comprarService:ComprarService) { }

  async anyadirALaCesta(producto){
    console.log('añadir')
    await this.comprarService.anyadirALaCesta(this.producto);
  }
=======
  id:string;
  ruta:string;
  dato:string;
  @Input() posicion: number;

  constructor(public cargarService: CargarService, private router: Router) { }
>>>>>>> amaia

  async ngOnInit() {
    this.datos = await this.cargarService.cargarNovedades(this.palabra1, this.palabra2)
    this.nombre = this.datos[this.posicion].name.toUpperCase();
    this.src = this.datos[this.posicion].mainImage;
    this.precio = Math.floor(this.datos[this.posicion].basePrice*100)/100;
<<<<<<< HEAD
    this.producto = this.datos[this.posicion];
=======
    this.id = this.datos[this.posicion].id;
    this.ruta = "/producto/" + this.id;
  }

  async mandarId()
  {
    this.dato = await this.cargarService.mandarId(this.id);
    this.router.navigate([this.ruta])
    return this.dato;
>>>>>>> amaia
  }
  
}


