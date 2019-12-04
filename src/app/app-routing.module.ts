import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{InicioComponent} from './inicio/inicio.component';
import { LoginRegistroComponent } from './login-registro/login-registro.component';
import { EncuestaComponent } from './encuesta/encuesta.component';


const routes: Routes = [
  {path: '', component:InicioComponent},
  {path: 'iniciosesion', component:LoginRegistroComponent},
  {path: 'usuario/encuesta', component:EncuestaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
