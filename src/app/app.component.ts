import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // el elemento que va a tomar para renderizar es app-root
  templateUrl: './app.component.html', // template de render
  styleUrls: ['./app.component.scss'] // estilos
})
export class AppComponent {
  title = 'portfolio';
}
