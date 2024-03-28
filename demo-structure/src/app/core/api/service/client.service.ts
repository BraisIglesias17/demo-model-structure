import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApiClient } from '../model/client.model';
import { CLIENTES } from 'src/app/mock/clients-mock';
import { Cliente } from '../api-model/client-api.model';

@Injectable({ providedIn: 'root' })
export class ClientApiService {
  public getClients(): Observable<ApiClient[]> {
    return of(CLIENTES).pipe(
      map((clientes: Cliente[]) =>
        clientes.map((cliente) => ApiClient.adaptFromApi(cliente))
      )
    );
  }
}
