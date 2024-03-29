import { ApiClient, IApiClient } from 'src/app/core/api/model/client.model';
import { AbstractAdapter } from '../adapter/adapter.factory';
import { ModelExtension } from '../adapter/registry';

export interface IFeClient extends IApiClient {
  age: Date;
}

@ModelExtension.register(ApiClient)
export class FeClient  extends ApiClient{
  fullName: string = '';
  age: number = 0;

  constructor(data?: ApiClient) {
    super();
    if (data) {
      this.name = data.name;
      this.surname = data.surname;
      this.fullName = data.name + ' ' + data.surname;
      this.age = new Date().getFullYear() - data.birthdate.getFullYear();
    }
  }

  static map<T, FeClient>(entity: T): FeClient {
    const data = entity as unknown as ApiClient;
    return new FeClient(data) as unknown as FeClient;
  }
}
