import { Component, OnInit } from '@angular/core';
import { CargarService } from '../cargar.service';
import { Router } from '@angular/router';
import { ComprarService } from '../comprar.service';

@Component({
  selector: 'app-losmasvendidos',
  templateUrl: './losmasvendidos.component.html',
  styleUrls: ['./losmasvendidos.component.css']
})
export class LosmasvendidosComponent implements OnInit {
  mounted:boolean = false;
  k:number = 5;
  losMasVendidos:any[]=[];
  dato:any;
  unidades: number = 1;
  constructor(private cargarService:CargarService, private router: Router, private comprarService: ComprarService) { }

  async ngOnInit() {

    let todosLosTes:any = await this.cargarService.todosLosTes();
    this.losMasVendidos = todosLosTes.sort(function (a, b) {
      if (a.unidadesVendidas < b.unidadesVendidas) {
        return 1;
      }
      if (a.unidadesVendidas > b.unidadesVendidas) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });

    while (this.losMasVendidos.length > this.k) {
      this.losMasVendidos.pop();
    }
    // console.log (this.losMasVendidos)
    this.mounted = true;
  }

  async mandarId(id:string) {
    this.dato = await this.cargarService.mandarId(id);
    let ruta = "/producto/" + id;
    this.router.navigate([ruta]);
    return this.dato;
  }


  async anyadirACesta(producto:any) {
    // console.log('añadir')
    // console.log(producto)
    await this.comprarService.anyadirALaCesta(producto, this.unidades);
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
