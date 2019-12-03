import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{InicioComponent} from './inicio/inicio.component';
import { LoginRegistroComponent } from './login-registro/login-registro.component';


const routes: Routes = [
  {path: '', component:InicioComponent},
  {path: 'iniciosesion', component:LoginRegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
