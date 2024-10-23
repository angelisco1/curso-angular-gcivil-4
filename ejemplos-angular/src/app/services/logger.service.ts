import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  info(texto: string) {
    const fecha = new Date().toLocaleDateString()
    // console.log(fecha + " - " + texto)
    console.log(`${fecha} - ${texto}`)
  }

  error(error: string) {
    console.error(error)
  }
}
