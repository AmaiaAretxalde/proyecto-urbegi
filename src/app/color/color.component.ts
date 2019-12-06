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

  constructor(public cargarService: CargarService) { }

  async ngOnInit() {
    this.datos = await this.cargarService.cargarPorColor(this.color)

  }
}
