import { Component, OnInit } from '@angular/core';
import {BuscarService} from '../buscar.service';
import { ActivatedRoute } from '@angular/router';
import { ComprarService } from '../comprar.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
tesEncontrados:any = [];
producto:any;
nombre:any;

  constructor( private buscarService:BuscarService, public route:ActivatedRoute, private comprarService:ComprarService) { }

  async ngOnInit() {
    this.route.params.subscribe(async (params) => {
      this.tesEncontrados = [];
      this.nombre = params.nombre;
      let busquedaTe = await this.buscarService.enviarTesEncontrados();
      for(let te of busquedaTe){
        for(let caracteristica in te){
          let caracteristicaT = te[(caracteristica)]
          if(typeof(caracteristicaT) === "string"){

            if(caracteristicaT.includes(params.nombre)){
              this.tesEncontrados.push(te);
            }
          }
        }
      }
    })
    console.log(this.tesEncontrados)
  }

  async anyadirACesta(te) {
    console.log(te);
    let teColor = await this.comprarService.anyadirALaCesta(te, te);
    return te;
  }

  
  
}
