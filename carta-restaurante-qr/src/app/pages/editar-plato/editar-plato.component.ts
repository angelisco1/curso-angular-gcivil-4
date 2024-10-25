import { Component } from '@angular/core';
import { FormularioPlatoComponent } from "../../components/formulario-plato/formulario-plato.component";
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PlatosService } from '../../services/platos.service';
import { Plato } from '../../types/plato';

@Component({
  selector: 'app-editar-plato',
  standalone: true,
  imports: [FormularioPlatoComponent],
  templateUrl: './editar-plato.component.html',
  styleUrl: './editar-plato.component.css'
})
export class EditarPlatoComponent {
  platoId: string = ''
  plato: Plato | null = null

  loading: boolean = true

  constructor(
    private route: ActivatedRoute,
    private platosService: PlatosService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log(params)
      this.platoId = params.get('platoId')!

      this.platosService.getPlatoById(this.platoId)
        .subscribe((plato: Plato) => {
          this.plato = plato
          this.loading = false
        })
    })
  }

  editarPlato(platoActualizado: Plato) {
    this.platosService.updatePlato(platoActualizado)
      .subscribe(() => {
        this.router.navigate(['/plato', this.platoId])
      })
  }

}
