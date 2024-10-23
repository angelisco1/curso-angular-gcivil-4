import { CurrencyPipe, DatePipe, JsonPipe, SlicePipe, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { OcultarPalabrasPipe } from '../../pipes/ocultar-palabras.pipe';

@Component({
  selector: 'app-cmp05-pipes',
  standalone: true,
  imports: [TitleCasePipe, CurrencyPipe, DatePipe, SlicePipe, JsonPipe, OcultarPalabrasPipe],
  templateUrl: './cmp05-pipes.component.html',
  styleUrl: './cmp05-pipes.component.css'
})
export class Cmp05PipesComponent {

  producto = {
    titulo: 'one plus 12',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur praesentium repellendus, aliquam quae corporis voluptas impedit eligendi distinctio. Ex libero quia voluptates, in harum non deserunt odio labore veritatis earum.',
    precio: 900,
    fechaLanzamiento: new Date()
  }

}
