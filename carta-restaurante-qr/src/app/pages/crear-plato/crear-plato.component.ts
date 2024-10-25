import { Component } from '@angular/core';
import { FormularioPlatoComponent } from "../../components/formulario-plato/formulario-plato.component";
import { Plato } from '../../types/plato';
import { PlatosService } from '../../services/platos.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { crearPlatoAction } from '../../actions/platos.actions';

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
    private router: Router,
    private store: Store<any>,
  ) { }

  crearPlato(plato: Plato) {
    this.platosService.createPlato(plato)
      .subscribe((platoCreado: any) => {
        console.log(platoCreado)
        // this.router.navigate(['/inicio'])

        this.store.dispatch(crearPlatoAction({
          plato: platoCreado
        }))

        this.router.navigateByUrl('/inicio')
      })
  }
}
