import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiClient, IApiClient } from 'src/app/core/api/model/client.model';
import { ApiPaycard } from 'src/app/core/api/model/paycard.model';
import { ClientApiService } from 'src/app/core/api/service/client.service';
import { PaycardApiService } from 'src/app/core/api/service/paycard.service';
import { Aplicacion } from 'src/app/core/app/ejemplo';
import { Client } from 'src/app/core/app/models/client.model';
import { Paycard } from 'src/app/core/app/models/paycard.model';
import { AdapterFactory } from 'src/app/core/features/models/adapter/adapter.factory';
import { Model } from 'src/app/core/features/models/adapter/registry';
import { FeClientService } from 'src/app/core/features/services/fe-client.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  apiClientes$ = this.apiService.getClients().pipe(
    map((clients) => {
      if (clients && clients.length > 0) {
        const feMapper = clients.map((client) =>
          AdapterFactory.adapt<ApiClient, Client>(client)
        );

        const appFinalModel = feMapper.map((feClient) => Client.map(feClient));

        return { api: clients, features: feMapper, app: appFinalModel };
      }
      return [];
    })
  );

  apiPaycard$ = this.apiPaycardService.getPaycards().pipe(
    map((paycards) => {
      if (paycards && paycards.length > 0) {
        return paycards
          .map((paycard) =>
            AdapterFactory.adapt<ApiPaycard, ApiPaycard>(paycard)
          )
          .map((fePaycard) => Paycard.map(fePaycard));
      }
      return [];
    })
  );

  feClientes$ = this.feClientService.getClients();

  constructor(
    private apiService: ClientApiService,
    private feClientService: FeClientService,
    private apiPaycardService: PaycardApiService,
    private aplicacion: Aplicacion
  ) {
    console.log(Model.getMap());
    this.aplicacion.ejemplo();
  }

  ngOnInit(): void {}
}
