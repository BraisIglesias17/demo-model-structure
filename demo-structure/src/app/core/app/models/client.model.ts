import { ApiClient } from '../../api/model/client.model';
import { FeClient } from '../../features/models/client/fe-client.model';

export class Client extends ApiClient {
  constructor(data?: Partial<ApiClient>) {
    super();
    Object.assign(this, data);
  }

  static map(data: ApiClient): Client {
    return new Client(data);
  }
}
