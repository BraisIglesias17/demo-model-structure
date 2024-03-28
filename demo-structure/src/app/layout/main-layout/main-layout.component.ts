import { Component, OnInit } from '@angular/core';
import { ClientApiService } from 'src/app/core/api/service/client.service';
import { Aplicacion } from 'src/app/core/app/ejemplo';
import { FeClientService } from 'src/app/core/features/services/fe-client.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  apiClientes$ = this.apiService.getClients();
  constructor(
    private apiService: ClientApiService,
    private feService: FeClientService,
    private aplicacion: Aplicacion
  ) {
    this.aplicacion.ejemplo();
  }

  ngOnInit(): void {}
}
