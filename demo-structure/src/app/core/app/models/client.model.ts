import { IApiClient } from '../../api/model/client.model';

export class Client {
  constructor(data?: Partial<IApiClient>) {
    Object.assign(this, data);
  }

  static map(data: IApiClient) {
    return new Client(data);
  }
}
