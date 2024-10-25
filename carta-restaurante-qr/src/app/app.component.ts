import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CrearPlatoComponent } from "./pages/crear-plato/crear-plato.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InicioComponent, CrearPlatoComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'carta-restaurante-qr';
  id = 123
}
