import { Cantidad, Tarjeta } from '../api-model/tarjeta-api.model';

export interface IApiPaycard {
  code: string;
}
export interface IAmount{
  amount:number;
  currency:string;
}

export class ApiPaycard {
  code: string;
  amount: IAmount;

  constructor(data: Tarjeta) {
    this.code = data.codigo;
    this.amount=adaptAmount(data.saldo);
  }
  public static adaptFromApi(data: Tarjeta): ApiPaycard {
    return new ApiPaycard(data);
  }
}


function adaptAmount(data: Cantidad): IAmount{
  return {
     amount:data.cantidad,
     currency:data.divisa
  } as IAmount;
}
