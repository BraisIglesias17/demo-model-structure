import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { IApiClient } from 'src/app/core/api/model/client.model';
import { IApiPaycard } from 'src/app/core/api/model/paycard.model';
import { ClientApiService } from 'src/app/core/api/service/client.service';
import { PaycardApiService } from 'src/app/core/api/service/paycard.service';
import { Aplicacion } from 'src/app/core/app/ejemplo';
import { Client } from 'src/app/core/app/models/client.model';
import { Paycard } from 'src/app/core/app/models/paycard.model';
import { AdapterFactory } from 'src/app/core/features/models/adapter/adapter.factory';
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
        
        const mapper = AdapterFactory.create(clients[0]);
        const feMapper= clients.map((client) => mapper.map(client))
        const appFinalModel=feMapper.map((feClient) => Client.map(feClient as IApiClient));

        return {api:clients,features:feMapper,app:appFinalModel}
      }
      return [];
    })
  );

  apiPaycard$=this.apiPaycardService.getPaycards().pipe(
        map((paycards) => {
          if (paycards && paycards.length > 0) {
            const mapper = AdapterFactory.create(paycards[0]);
            return paycards.map((paycard) => mapper.map(paycard)).map((fePaycard) => Paycard.map(fePaycard as IApiPaycard));
          }
          return [];
        })
      );
      
  constructor(
    private apiService: ClientApiService,
    private apiPaycardService: PaycardApiService,
    private feService: FeClientService,
    private aplicacion: Aplicacion
  ) {
    this.aplicacion.ejemplo();
  }

  ngOnInit(): void {}
}
