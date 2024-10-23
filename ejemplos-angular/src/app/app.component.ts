import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cmp01DataBindingComponent } from './components/cmp01-data-binding/cmp01-data-binding.component';
import { Cmp02VariablesDePlantillaComponent } from "./components/cmp02-variables-de-plantilla/cmp02-variables-de-plantilla.component";
import { Cmp03InputOutputComponent } from "./components/cmp03-input-output/cmp03-input-output.component";
import { Cmp04DirectivasComponent } from "./components/cmp04-directivas/cmp04-directivas.component";
import { Cmp05PipesComponent } from './components/cmp05-pipes/cmp05-pipes.component';
import { Cmp06ServiciosComponent } from "./components/cmp06-servicios/cmp06-servicios.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Cmp01DataBindingComponent, Cmp02VariablesDePlantillaComponent, Cmp03InputOutputComponent, Cmp04DirectivasComponent, Cmp05PipesComponent, Cmp06ServiciosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplos-angular';
}