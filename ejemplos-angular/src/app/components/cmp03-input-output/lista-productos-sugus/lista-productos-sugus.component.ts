import { Component, EventEmitter, Output } from '@angular/core';
import { SugusComponent } from '../sugus/sugus.component';
import { Sugus } from '../../../types/sugus';

@Component({
  selector: 'app-lista-productos-sugus',
  standalone: true,
  imports: [SugusComponent],
  templateUrl: './lista-productos-sugus.component.html',
  styleUrl: './lista-productos-sugus.component.css'
})
export class ListaProductosSugusComponent {

  @Output() onAddToCart = new EventEmitter<Sugus>()

  sugusFresa: Sugus = {
    color: 'red',
    sabor: 'fresa'
  }

  sugusNaranja: Sugus = {
    color: 'orange',
    sabor: 'naranja'
  }

  sugusPinya: Sugus = {
    color: 'blue',
    sabor: 'piña'
  }

  sugusLimon: Sugus = {
    color: 'yellow',
    sabor: 'limón'
  }

  addSugusToCart(sugus: Sugus) {
    console.log(sugus)
    this.onAddToCart.emit(sugus)
  }
}
