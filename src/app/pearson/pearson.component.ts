import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-pearson',
  templateUrl: './pearson.component.html',
  styleUrls: ['./pearson.component.css']
})
export class PearsonComponent implements OnInit {
  misSabores:any;
  datos:any;
  datosUsuarios:any;
  saboresOtro:any;
  pearsonCoeficient:any;
  xy:any;

  constructor(private usuarioService:UsuarioService) { }

  async ngOnInit() {
    this.misSabores = await this.usuarioService.obtenerPuntuacionSabores();
    console.log(this.misSabores);
    this.datos = await this.usuarioService.obtenerPuntuacionSaboresOtro();
    console.log(this.datos)
    this.datosUsuarios = this.datos.respuesta;
    console.log(this.datosUsuarios)
    this.datosUsuarios.map((usuario:any)=>{
      this.saboresOtro = usuario.sabores.map((sabor:any)=>{
        console.log(sabor)
        return sabor;
      })
      this.xy=this.misSabores.map((misabor:any)=>{
        this.saboresOtro.map((saborOtro:any)=>{
          return misabor*saborOtro;
        })
      })
    })
    console.log(this.xy)

  }

}
