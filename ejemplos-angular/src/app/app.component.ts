import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cmp01DataBindingComponent } from './components/cmp01-data-binding/cmp01-data-binding.component';
import { Cmp02VariablesDePlantillaComponent } from "./components/cmp02-variables-de-plantilla/cmp02-variables-de-plantilla.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Cmp01DataBindingComponent, Cmp02VariablesDePlantillaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplos-angular';
}