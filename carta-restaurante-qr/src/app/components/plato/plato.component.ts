import { Component, Input } from '@angular/core';
import { Plato } from '../../types/plato';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-plato',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './plato.component.html',
  styleUrl: './plato.component.css'
})
export class PlatoComponent {
  @Input() plato: Plato | null = null

  get alergenos() {
    // Operador optional chaining
    return this.plato?.alergenos.join(', ') || ''
  }

  // set alergenos(alergenosNuevos) {
  //   this.plato?.alergenos = alergenosNuevos
  // }
  // Llama al setter de alergenos
  // this.alergenos = []
}
