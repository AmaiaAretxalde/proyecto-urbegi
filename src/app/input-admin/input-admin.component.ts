import { Component, OnInit } from '@angular/core';
import { CargarService } from '../cargar.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-input-admin',
  templateUrl: './input-admin.component.html',
  styleUrls: ['./input-admin.component.css']
})
export class InputAdminComponent implements OnInit {
  id: string;
  mainImage: string;
  categoria: string;
  producto: any;
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
  stock: number;
  src: string;
  mounted: boolean = false;
  _id:string;

  constructor(public cargarService: CargarService,) { }

  ngOnInit() {
  }
  async teAnyadido() {
    let te = {
      mainImage: this.mainImage,
      categoria: this.categoria,
      descripcion: this.descripcion,
      name: this.nombre,
      longDescription: this.longDescription,
      aroma: this.aroma,
      sabor: this.sabor,
      color: this.color,
      stock: this.stock,
      basePrice: this.precio,
      id: this.id
    }
    console.log(te);

   let response:any= await this.cargarService.teAnyadido(te);
   console.log(response);
  }


llamarSnackbar(){
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

}