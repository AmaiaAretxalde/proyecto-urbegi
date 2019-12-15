import { Component, OnInit } from '@angular/core';
import { CargarService } from '../cargar.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrls: ['./modificar-producto.component.css']
})
export class ModificarProductoComponent implements OnInit {
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

  constructor(public cargarService: CargarService, private router: Router, private activatedRoute: ActivatedRoute) { }
  async ngOnInit() {
    this.activatedRoute.params.subscribe(async (params) => {
      this.id = params.id;
      this.producto = await this.cargarService.cargarInfoProducto(this.id);
      console.log(this.producto);
      this.mainImage = this.producto[0].mainImage;
      this.categoria = this.producto[0].categoria;
      this.descripcion = this.producto[0].descripcion;
      this.aroma = this.producto[0].caracteristicas.aroma.texto;
      this.sabor = this.producto[0].caracteristicas.sabor.texto;
      this.color = this.producto[0].caracteristicas.color.texto;
      this.nombre = this.producto[0].name;
      this.stock = this.producto[0].stock;
      this.longDescription = this.producto[0].longDescription;
      this.precio = this.producto[0].basePrice;
      this._id = this.producto[0]._id




    })
    /* console.log(this.mounted)
    this.id = await this.cargarService.pasarId();
    console.log(this.producto);
    if (this.producto.mensaje ==="404") {
      this.router.navigate(['../error404']);
    } else {
      this.src = this.producto[0].mainImage;
     
      this.precio = this.producto[0].basePrice
      this.longDescription = this.producto[0].longDescription;
      this.precioTotal = Math.floor(this.unidades * this.precio / 100) * 100;
      this.iconoAroma = this.producto[0].caracteristicas.aroma.image;
      this.aroma = this.producto[0].caracteristicas.aroma.texto;
      this.iconoSabor = this.producto[0].caracteristicas.sabor.image;
      this.sabor = this.producto[0].caracteristicas.sabor.texto;
      this.iconoColor = this.producto[0].caracteristicas.color.image;
      this.color = this.producto[0].caracteristicas.color.texto;
      this.mounted = true;
      console.log(this.mounted)
    } 
   */ }

  async nuevoTe() {
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
      basePrice: this.precio
    }
    console.log(te);

   let response:any= await this.cargarService.modificarTe(te, this._id);
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
