import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarPalabras',
  standalone: true
})
export class OcultarPalabrasPipe implements PipeTransform {

  transform(value: string, palabras: Array<string>, simbolo: string = '*'): string {
    let resultado = value

    palabras.forEach((palabra: string) => {
      resultado = resultado.replaceAll(palabra, simbolo.repeat(palabra.length))
    })

    return resultado;
  }

}
