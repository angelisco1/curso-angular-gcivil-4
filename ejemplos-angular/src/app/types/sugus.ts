export interface Sugus {
  color: string;
  sabor: string;
}

export interface ProductoSugus extends Sugus {
  cantidad: number;
}

// {
//   color: 'yellow',
//   sabor: 'limón',
//   cantidad: 2
// }