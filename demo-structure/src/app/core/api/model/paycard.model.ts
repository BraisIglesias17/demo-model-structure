import { Cantidad, Tarjeta } from '../api-model/tarjeta-api.model';

export interface IAmount {
  amount: number;
  currency: string;
}

export class ApiPaycard {
  code: string;
  amount: IAmount;

  constructor(data?: Tarjeta) {
    if (data) {
      this.code = data.codigo;
      this.amount = adaptAmount(data.saldo);
    } else {
      this.code = '';
      this.amount = { amount: 0, currency: 'ER' };
    }
  }
  public static adaptFromApi(data: Tarjeta): ApiPaycard {
    return new ApiPaycard(data);
  }
}

function adaptAmount(data: Cantidad): IAmount {
  return {
    amount: data.cantidad,
    currency: data.divisa,
  } as IAmount;
}
