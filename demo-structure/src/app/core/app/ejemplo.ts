import { Injectable } from '@angular/core';
import { ClientApiService } from '../api/service/client.service';
import { map, tap } from 'rxjs/operators';
import { AdapterFactory } from '../features/models/adapter/adapter.factory';
import { PaycardApiService } from '../api/service/paycard.service';
import { Client } from './models/client.model';
import { ApiClient, IApiClient } from '../api/model/client.model';
import { IApiPaycard } from '../api/model/paycard.model';
import { Paycard } from './models/paycard.model';

@Injectable({ providedIn: 'root' })
export class Aplicacion {
  constructor(
    private clientApiService: ClientApiService,
    private paycardApiService: PaycardApiService
  ) {}

  public ejemplo(): void {
    this.clientApiService
      .getClients()
      .pipe(
        map((clients) => {
          if (clients && clients.length > 0) {
            return clients.map((client) => AdapterFactory.adapt(client));
          }
          return [];
        }),
        map((feClients) =>
          feClients.map((feClient) => Client.map(feClient as IApiClient))
        ),
        tap((res) => {console.log(res); res.map((re)=>console.log(re))})
      )
      .subscribe();

    this.paycardApiService
      .getPaycards()
      .pipe(
        map((paycards) => {
          if (paycards && paycards.length > 0) {
            return paycards.map((paycard) => AdapterFactory.adapt(paycard));
          }
          return [];
        }),
        map((fePaycards) =>
          fePaycards.map((fePaycard) => Paycard.map(fePaycard as IApiPaycard))
        ),
        tap((res) => console.log(res))
      )
      .subscribe();
  }
}
