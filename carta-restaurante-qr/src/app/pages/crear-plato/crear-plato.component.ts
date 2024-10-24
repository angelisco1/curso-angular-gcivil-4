import { Component } from '@angular/core';
import { FormularioPlatoComponent } from "../../components/formulario-plato/formulario-plato.component";
import { Plato } from '../../types/plato';
import { PlatosService } from '../../services/platos.service';

@Component({
  selector: 'app-crear-plato',
  standalone: true,
  imports: [FormularioPlatoComponent],
  templateUrl: './crear-plato.component.html',
  styleUrl: './crear-plato.component.css'
})
export class CrearPlatoComponent {
  plato: Plato = {
    id: '',
    nombre: '',
    descripcion: '',
    precio: 0,
    imagen: '',
    ingredientes: [],
    alergenos: [],
    disponible: true
  }

  constructor(
    private platosService: PlatosService,
  ) { }

  crearPlato(plato: Plato) {
    this.platosService.createPlato(plato)
      .subscribe((platoCreado: any) => {
        console.log(platoCreado)
      })
  }
}
