import { Directive, HostBinding, HostListener, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarcar]',
  standalone: true
})
export class MarcarDirective implements OnInit, OnChanges {
  @HostBinding('style.backgroundColor') colorFondo: string = ''
  @Input('appMarcar') color: string = 'white'

  intervalId: NodeJS.Timeout | undefined

  constructor() {
    console.log('Se está aplicando la directiva')
    console.log(this.color)
  }

  ngOnInit() {
    console.log(this.color)
    this.colorFondo = this.color
  }

  ngOnChanges(changes: any) {
    console.log(changes)
    this.colorFondo = changes.color.currentValue
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.intervalId = setInterval(() => {
      // Operador ternario: equivalente al if-else de abajo
      this.colorFondo = this.colorFondo === this.color ? 'white' : this.color
      // if (this.colorFondo === this.color) {
      //   this.colorFondo = 'white'
      // } else {
      //   this.colorFondo = this.color
      // }
    }, 800)
  }

  @HostListener('mouseleave') onMouseLeave() {
    clearInterval(this.intervalId)
    this.colorFondo = 'white'
  }
}


// () => {
//   // Aquí el código
// }

// (a, b) => {
//   // Aquí el código
// }

// (a) => {
//   // Aquí el código
// }

// a => {
//   // Aquí el código
// }

// persona = {
//   nombre: 'aaa',
//   apellidos: 'bbbb',
// }

// persona => persona.nombre

// persona => {
//   return persona.nombre
// }