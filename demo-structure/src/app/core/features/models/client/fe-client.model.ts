import { ApiClient, IApiClient } from 'src/app/core/api/model/client.model';
import { AbstractAdapter } from '../adapter/adapter.factory';
import { Model } from '../adapter/registry';
import { ApiPaycard } from 'src/app/core/api/model/paycard.model';

@Model.register
export class FeClient extends ApiClient {
  fullName: string = '';
  age: number = 0;
  prueba: string = '';

  constructor(data?: ApiClient) {
    super();
    if (data) {
      this.name = data.name;
      this.surname = data.surname;
      this.prueba = 'Prueba de nueva propiedad';
      this.birthdate = data.birthdate;
      this.fullName = data.name + ' ' + data.surname;
      this.age = new Date().getFullYear() - data.birthdate.getFullYear();
    }
  }

  static map(entity: ApiClient): FeClient {
    console.log('FECLIENT ADAPTER');
    const data = entity;
    return new FeClient(data);
  }
}
