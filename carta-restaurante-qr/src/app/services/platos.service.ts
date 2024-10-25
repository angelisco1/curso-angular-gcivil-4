import { Injectable } from '@angular/core';
import { Plato } from '../types/plato';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PlatosService {
  url: string = 'http://localhost:3000/platos'

  constructor(
    private http: HttpClient,
  ) { }

  getPlatoById(platoId: string): Observable<Plato> {
    return this.http.get<Plato>(`${this.url}/${platoId}`)
  }

  getPlatos(): Observable<Array<Plato>> {
    return this.http.get<Array<Plato>>(this.url)
    // return of([
    //   {
    //     "id": "1",
    //     "nombre": "Salmorejo",
    //     "descripcion": "Un plato frío típico de la cocina andaluza, hecho principalmente con tomate, pan y aceite.",
    //     "precio": 7,
    //     "ingredientes": ["Tomate", "Sal", "Aceite", "Pan", "Ajo", "Huevo duro", "Jamón"],
    //     "imagen": "https://ejemplo.com/imagenes/salmorejo.jpg",
    //     "disponible": true,
    //     "alergenos": ["Gluten", "Huevo"]
    //   },
    //   {
    //     "id": "2",
    //     "nombre": "Paella de Marisco",
    //     "descripcion": "Clásico arroz español con una variedad de mariscos frescos y sabor a azafrán.",
    //     "precio": 12,
    //     "ingredientes": ["Arroz", "Gambas", "Calamares", "Mejillones", "Azafrán", "Aceite de oliva", "Pimiento"],
    //     "imagen": "https://ejemplo.com/imagenes/paella.jpg",
    //     "disponible": true,
    //     "alergenos": ["Mariscos", "Moluscos"]
    //   },
    //   {
    //     "id": "3",
    //     "nombre": "Tarta de Queso",
    //     "descripcion": "Un postre cremoso y delicioso hecho a base de queso, ideal para cerrar una comida.",
    //     "precio": 5,
    //     "ingredientes": ["Queso crema", "Azúcar", "Huevos", "Galletas", "Mantequilla"],
    //     "imagen": "https://ejemplo.com/imagenes/tarta_queso.jpg",
    //     "disponible": true,
    //     "alergenos": ["Lácteos", "Gluten", "Huevo"]
    //   }
    // ])
  }

  createPlato(plato: Plato) {
    delete plato.id
    return this.http.post(this.url, plato, { params: {db: 'catalogo3'} })
  }

  updatePlato(platoActualizado: Plato) {
    return this.http.put(`${this.url}/${platoActualizado.id}`, platoActualizado)
  }
}