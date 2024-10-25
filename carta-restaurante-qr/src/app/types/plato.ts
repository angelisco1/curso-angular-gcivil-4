export interface Plato {
  id?: string,
  nombre: string,
  descripcion: string,
  precio: number,
  ingredientes: Array<string>,
  imagen: string,
  disponible: boolean,
  alergenos: Array<string>
}