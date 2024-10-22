import { Component } from '@angular/core';
import { SugusComponent } from "./sugus/sugus.component";
import { ProductoSugus, Sugus } from '../../types/sugus';
import { ListaProductosSugusComponent } from "./lista-productos-sugus/lista-productos-sugus.component";


@Component({
  selector: 'app-cmp03-input-output',
  standalone: true,
  imports: [SugusComponent, ListaProductosSugusComponent],
  templateUrl: './cmp03-input-output.component.html',
  styleUrl: './cmp03-input-output.component.css'
})
export class Cmp03InputOutputComponent {

  carritoSugus: Array<ProductoSugus> = [
    // { color: 'red', sabor: 'fresa', cantidad: 8 }
  ]

  addSugus(sugus: Sugus) {
    const productoEncontrado = this.carritoSugus.find((productoSugus: ProductoSugus) => {
      return productoSugus.sabor === sugus.sabor
    })

    if (productoEncontrado) {
      productoEncontrado.cantidad = productoEncontrado.cantidad + 1
    } else {
      const nuevoProductoSugus = {
        color: sugus.color,
        sabor: sugus.sabor,
        cantidad: 1
      }
      this.carritoSugus.push(nuevoProductoSugus)
    }
  }
}