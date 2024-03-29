import { Cliente } from '../api-model/client-api.model';

export interface IApiClient {
  name: string;
  surname: string;
  birthdate: Date;
}

export class ApiClient {
  name: string = '';
  surname: string = '';
  birthdate: Date = new Date();

  constructor(data?: Cliente) {
    if(data){
      (this.name = data.nombre),
      (this.surname = data.apellido),
      (this.birthdate = new Date(data.fechaDeNacimiento));
    }
    
  }
  public static adaptFromApi(data: Cliente): ApiClient {
    return new ApiClient(data);
  }
}
