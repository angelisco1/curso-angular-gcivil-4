import { Injectable } from '@angular/core';
import { Plato } from '../types/plato';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlatosService {

  constructor() { }

  getPlatos(): Observable<Array<Plato>> {
    return of([
      {
        id: '1',
        nombre: 'Salmorejo',
        descripcion: 'adasdasd',
        precio: 7,
        ingredientes: ['Tomate', 'Sal', 'Aceite', 'Pan', '...'],
        imagen: '',
        disponible: true,
        alergenos: []
      },
      {
        id: '2',
        nombre: 'Salmorejo',
        descripcion: 'adasdasd',
        precio: 7,
        ingredientes: ['Tomate', 'Sal', 'Aceite', 'Pan', '...'],
        imagen: '',
        disponible: true,
        alergenos: []
      },
    ])
  }
}
