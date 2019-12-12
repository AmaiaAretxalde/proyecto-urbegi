import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { TeRojoComponent } from './te-rojo/te-rojo.component';
import { TeVerdeComponent } from './te-verde/te-verde.component';
import { TeNegroComponent } from './te-negro/te-negro.component';
import { TeBlancoComponent } from './te-blanco/te-blanco.component';
import { TeOolongComponent } from './te-oolong/te-oolong.component';
import { InfusionesComponent } from './infusiones/infusiones.component';
import { LoginComponent} from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistroComponent } from './registro/registro.component';
import { LoginRegistroComponent } from './login-registro/login-registro.component';
import { NovedadComponent } from './novedad/novedad.component';
import { ColorComponent } from './color/color.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { SaboresComponent } from './sabores/sabores.component';
import { FuncionesComponent } from './funciones/funciones.component';

import { CestaComponent } from './cesta/cesta.component';

import { TipoComponent } from './tipo/tipo.component';
import { RecomendacionComponent } from './recomendacion/recomendacion.component';

import { ProductoComponent } from './producto/producto.component';
import { Encuesta1Component } from './encuesta1/encuesta1.component';
import { Encuesta2Component } from './encuesta2/encuesta2.component';
import { Encuesta3Component } from './encuesta3/encuesta3.component';
import { Error404Component } from './error404/error404.component';
import { PieDePaginaComponent } from './pie-de-pagina/pie-de-pagina.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { PearsonComponent } from './pearson/pearson.component';





@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuComponent,
    TeRojoComponent,
    TeVerdeComponent,
    TeNegroComponent,
    TeBlancoComponent,

    TeOolongComponent,
    InfusionesComponent,

    LoginComponent,
    RegistroComponent,
    LoginRegistroComponent,
    NovedadComponent,
    ColorComponent,
    EncuestaComponent,
    SaboresComponent,
    FuncionesComponent,
    CestaComponent,

    TipoComponent,
    RecomendacionComponent,

    ProductoComponent,
    Encuesta1Component,
    Encuesta2Component,
    Encuesta3Component,
    CestaComponent,
    TipoComponent,
    Error404Component,
    PieDePaginaComponent,
    BusquedaComponent,
    PearsonComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
