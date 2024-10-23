import { Component } from '@angular/core';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-cmp06-servicios',
  standalone: true,
  imports: [],
  templateUrl: './cmp06-servicios.component.html',
  styleUrl: './cmp06-servicios.component.css'
})
export class Cmp06ServiciosComponent {

  // private logger: LoggerService;
  // constructor(loggerService: LoggerService) {
  //   this.logger = loggerService
  // }
  constructor(
    private loggerService: LoggerService
  ) { }

  mostrarError() {
    this.loggerService.error('Un error')
  }

  mostrarInfo() {
    this.loggerService.info('Información...')
  }

}
