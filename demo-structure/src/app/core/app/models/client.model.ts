import { ApiClient, IApiClient } from '../../api/model/client.model';

export class Client extends ApiClient {
  constructor(data?: Partial<IApiClient>) {
    super();
    Object.assign(this, data);
  }

  static map(data: IApiClient) {
    return new Client(data);
  }
}
