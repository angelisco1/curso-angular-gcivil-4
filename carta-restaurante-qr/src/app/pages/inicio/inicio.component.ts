import { Component } from '@angular/core';
import { PlatoComponent } from '../../components/plato/plato.component';
import { PlatosService } from '../../services/platos.service';
import { Plato } from '../../types/plato';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [PlatoComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  platos: Array<Plato> = []

  constructor(
    private platosService: PlatosService
  ) {}

  ngOnInit() {
    this.platosService.getPlatos()
      .subscribe((platos: Array<Plato>) => {
        this.platos = platos
      })
  }
}
