import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MarcarDirective } from '../../directives/marcar.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cmp04-directivas',
  standalone: true,
  imports: [
    // NgIf,
    NgClass,
    MarcarDirective,
    FormsModule,
  ],
  templateUrl: './cmp04-directivas.component.html',
  styleUrl: './cmp04-directivas.component.css'
})
export class Cmp04DirectivasComponent {
  isAuthenticated: boolean = false
  role: string = ''

  precioAcciones: Array<any> = [
    { id: 10, nombre: 'Tesla', ticker: 'TSLA', precio: 190 },
    { id: 20, nombre: 'Apple', ticker: 'AAPL', precio: 175 },
    { id: 3, nombre: 'Amazon', ticker: 'AMZN', precio: 125 },
    { id: 4, nombre: 'Google', ticker: 'GOOGL', precio: 140 },
    { id: 5, nombre: 'Microsoft', ticker: 'MSFT', precio: 315 },
    { id: 6, nombre: 'Nvidia', ticker: 'NVDA', precio: 430 }
  ];

  color: string = '#ffffff'

  toggleIsAuthenticated() {
    this.isAuthenticated = !this.isAuthenticated
  }

}
