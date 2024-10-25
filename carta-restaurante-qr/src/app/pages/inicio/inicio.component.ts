import { Component } from '@angular/core';
import { PlatoComponent } from '../../components/plato/plato.component';
import { PlatosService } from '../../services/platos.service';
import { Plato } from '../../types/plato';
import { QrCodeModule } from 'ng-qrcode';
import { Store } from '@ngrx/store';
import { selectPlatos } from '../../selectors/platos.selectors';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [PlatoComponent, QrCodeModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  platos: Array<Plato> = []

  constructor(
    private platosService: PlatosService,
    private store: Store<any>,
  ) {}

  get listaPlatos() {
    return this.platos.map((p: Plato) => `<p>${p.nombre}</p>`).join('\n')
  }

  ngOnInit() {
    this.store.select(selectPlatos)
      .subscribe((platos: Array<Plato>) => {
          console.log({platos})
          this.platos = platos
        })
    // this.platosService.getPlatos()
    //   .subscribe((platos: Array<Plato>) => {
    //     this.platos = platos
    //   })
  }
}
