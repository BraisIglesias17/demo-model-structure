import { ApiClient } from 'src/app/core/api/model/client.model';
import { Model } from './registry';

export class AbstractAdapter {
  static map<T, V>(entity: T): V {
    console.log('GENERAL ADAPTER');
    return entity as unknown as V;
  }
}

export class AdapterFactory {
  static adapt<T, V>(entity: T): V {
    const hash = Model.getMap();

    const key = Object(entity).constructor.name;

    return hash[key] ? hash[key](entity) : AbstractAdapter.map(entity);
  }
}
