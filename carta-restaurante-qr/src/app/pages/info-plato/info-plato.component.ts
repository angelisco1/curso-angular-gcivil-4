import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { PlatosService } from '../../services/platos.service';
import { Plato } from '../../types/plato';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-info-plato',
  standalone: true,
  imports: [JsonPipe, RouterLink],
  templateUrl: './info-plato.component.html',
  styleUrl: './info-plato.component.css'
})
export class InfoPlatoComponent {
  platoId: string = ''
  plato: Plato | null = null

  constructor(
    private route: ActivatedRoute,
    private platosService: PlatosService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log(params)
      this.platoId = params.get('platoId')!

      this.platosService.getPlatoById(this.platoId)
        .subscribe((plato: Plato) => {
          this.plato = plato
        })
    })
  }

}
