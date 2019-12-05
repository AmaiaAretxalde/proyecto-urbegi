import { Component, OnInit, Input } from '@angular/core';
import { CargarService } from '../cargar.service';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.css']
})
export class TipoComponent implements OnInit {
  datos:any;
  nombre:string;
  src:string;
  descripcion:string;
  @Input() tipo: string;

  constructor(public cargarService:CargarService) { }

  async ngOnInit() {
    this.datos = await this.cargarService.cargarInfoPorTipo(this.tipo)
    console.log(this.datos)
    this.nombre = this.datos[0].nombre;
    this.src = this.datos[0].foto;
    this.descripcion = this.datos[0].descripcion;
  }
}
