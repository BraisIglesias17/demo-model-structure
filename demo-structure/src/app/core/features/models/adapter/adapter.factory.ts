import { FeClient } from '../client/fe-client.model';
import { ApiClient } from 'src/app/core/api/model/client.model';
import { Model } from './registry';

export class AbstractAdapter {
  static map<T, V>(entity: T): V {
    console.log('GENERAL ADAPTER');
    return entity as unknown as V;
  }
}

export class AdapterFactory {
  static adapt<T>(entity: T) {
    const hash = Model.getMap();

    const key = Object(entity).constructor.name;

    return hash[key] ? hash[key](entity) : AbstractAdapter.map(entity);

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
