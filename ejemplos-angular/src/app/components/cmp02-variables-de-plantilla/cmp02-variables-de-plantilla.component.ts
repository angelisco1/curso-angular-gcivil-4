import { Component } from '@angular/core';

@Component({
  selector: 'app-cmp02-variables-de-plantilla',
  standalone: true,
  imports: [],
  templateUrl: './cmp02-variables-de-plantilla.component.html',
  styleUrl: './cmp02-variables-de-plantilla.component.css'
})
export class Cmp02VariablesDePlantillaComponent {

  nombre: string = ''

  play(video: HTMLVideoElement) {
    console.log(video)
    console.dir(video)
    video.play()
  }

  pause(video: HTMLVideoElement) {
    video.pause()
  }

  changeVolume(video: HTMLVideoElement, event: Event) {
    const volumenActualizado = (event.target as HTMLInputElement).value
    video.volume = Number(volumenActualizado) / 100
  }

  mostrarSaludo(inputNombre: HTMLInputElement) {
    console.log("Hola " + inputNombre.value)
  }

  mostrarSaludo2(nombre: string) {
    console.log("Hola " + nombre)
  }

  setNombre(event: any) {
    this.nombre = (event.target as HTMLInputElement).value
  }

  mostrarSaludo3() {
    console.log('Hola ' + this.nombre)
  }

}
