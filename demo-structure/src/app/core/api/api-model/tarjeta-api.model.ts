export interface Tarjeta {
  codigo: string;
  saldo:Cantidad;
}

export interface Cantidad{
  cantidad:number;
  divisa:string;
}