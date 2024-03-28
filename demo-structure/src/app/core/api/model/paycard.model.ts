import { Tarjeta } from '../api-model/tarjeta-api.model';

export interface IApiPaycard {
  code: string;
}

export class ApiPaycard {
  code: string;

  constructor(data: Tarjeta) {
    this.code = data.codigo;
  }
  public static adaptFromApi(data: Tarjeta): ApiPaycard {
    return new ApiPaycard(data);
  }
}
