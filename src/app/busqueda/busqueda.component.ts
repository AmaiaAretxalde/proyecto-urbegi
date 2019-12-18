import { Component, OnInit } from '@angular/core';
import {BuscarService} from '../buscar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ComprarService } from '../comprar.service';
import { CargarService } from '../cargar.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
tesEncontrados:any = [];
producto:any;
nombre:any;
unidades:number = 1;
dato:any;

  constructor( private buscarService:BuscarService, public route:ActivatedRoute, private comprarService:ComprarService, private cargarService:CargarService, private router: Router) { }

  async ngOnInit() {
    this.route.params.subscribe(async (params) => {
      this.tesEncontrados = [];
      this.nombre = params.nombre;
      let busquedaTe:any = await this.buscarService.enviarTesEncontrados();
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
    let teColor = await this.comprarService.anyadirALaCesta(te, this.unidades);
    return te;
  }

  async mandarId(id:string) {
    this.dato = await this.cargarService.mandarId(id);
    let ruta = "/producto/" + id;
    this.router.navigate([ruta]);
    return this.dato;
  }


  llamarSnackbar() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
  }
  
}
