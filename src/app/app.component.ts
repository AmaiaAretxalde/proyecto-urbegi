import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { slider, transformer, fader, stepper } from './route-ani'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // animations: [fader,
  //   slider,
  //   transformer,
  //   stepper]
})
export class AppComponent {
  title = 'proyectofinal';

  prepareRoute(outlet:RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
