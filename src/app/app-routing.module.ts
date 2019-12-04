import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{InicioComponent} from './inicio/inicio.component';
import{TeVerdeComponent} from './te-verde/te-verde.component';
import { TeRojoComponent } from './te-rojo/te-rojo.component';
import { TeNegroComponent } from './te-negro/te-negro.component';
import { TeBlancoComponent } from './te-blanco/te-blanco.component';
import { TeDecafComponent } from './te-decaf/te-decaf.component';
import { TeOolongComponent } from './te-oolong/te-oolong.component';
import { InfusionesComponent } from './infusiones/infusiones.component';
import { RooibosComponent } from './rooibos/rooibos.component';
import { LoginRegistroComponent } from './login-registro/login-registro.component';
import { EncuestaComponent } from './encuesta/encuesta.component';



const routes: Routes = [
  {path: '', component:InicioComponent},
  {path: 'te-verde', component:TeVerdeComponent},
  {path: 'te-rojo', component:TeRojoComponent},
  {path: 'te-negro', component:TeNegroComponent},
  {path: 'te-blanco', component:TeBlancoComponent},
  {path: 'te-decaf', component:TeDecafComponent},
  {path: 'te-oolong', component:TeOolongComponent},
  {path: 'infusiones', component:InfusionesComponent},
  {path: 'rooibos', component:RooibosComponent},
  {path: 'iniciosesion', component:LoginRegistroComponent},
  {path: 'usuario/encuesta', component:EncuestaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
