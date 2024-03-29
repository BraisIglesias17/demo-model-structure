import { FeClient } from '../client/fe-client.model';
import { ApiClient } from 'src/app/core/api/model/client.model';

export class AbstractAdapter {
  static map<T, V>(entity: T): V {
    return entity as unknown as V;
  }
}

export class AdapterFactory {
  static adapt<T>(entity: T) {
    switch (true) {
      case entity instanceof ApiClient:
        console.log('RETURNING FECLIENT');
        return FeClient.map(entity) as FeClient;
      default:
        console.log('RETURNING GENERAL');
        return AbstractAdapter.map(entity);
    }
  }
}
