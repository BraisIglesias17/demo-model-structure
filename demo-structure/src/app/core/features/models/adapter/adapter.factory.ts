import { FeClient } from '../client/fe-client.model';
import { ApiClient } from 'src/app/core/api/model/client.model';

export class AbstractAdapter {
  static map<T, V>(entity: T): V {
    return entity as unknown as V;
  }
}

export class AdapterFactory {
  static create<T, V>(entity: T) {
    switch (true) {
      case entity instanceof ApiClient:
        console.log('RETURNING FECLIENT');
        return FeClient;
      default:
        console.log('RETURNING GENERAL');
        return AbstractAdapter;
    }
  }
}
