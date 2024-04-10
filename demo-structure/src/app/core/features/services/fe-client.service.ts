import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { FeClient } from '../models/client/fe-client.model';
import { ClientApiService } from '../../api/service/client.service';
import { ApiClient } from '../../api/model/client.model';

@Injectable({ providedIn: 'root' })
export class FeClientService {
  constructor(private apiService: ClientApiService) {}

  public getClients(): Observable<FeClient[]> {
    return this.apiService
      .getClients()
      .pipe(
        map((clientes: ApiClient[]) =>
          clientes.map((cliente) => FeClient.map(cliente))
        )
      );
  }
}
