import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cmp01-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cmp01-data-binding.component.html',
  styleUrl: './cmp01-data-binding.component.css'
})
export class Cmp01DataBindingComponent {
  nombre: string = 'Ángel'
  logoAngular: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'

  // logos está en la carpeta public del proyecto
  logoAngularLocal: string = 'logos/logo-angular.png'

  getNombre(): string {
    return this.nombre
  }

  setNombre(nuevoNombre: string): void {
    this.nombre = nuevoNombre
  }

  setNombre2(event: Event) {
    console.log(event)
    // this.nombre = event.target.value
    this.nombre = (event.target as HTMLInputElement).value
  }
}
