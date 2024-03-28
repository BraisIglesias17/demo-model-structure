import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApiPaycard } from '../model/paycard.model';
import { TARJETAS } from 'src/app/mock/clients-mock';
import { Tarjeta } from '../api-model/tarjeta-api.model';

@Injectable({ providedIn: 'root' })
export class PaycardApiService {
  public getPaycards(): Observable<ApiPaycard[]> {
    return of(TARJETAS).pipe(
      map((tarjetas: Tarjeta[]) =>
        tarjetas.map((tarjeta) => ApiPaycard.adaptFromApi(tarjeta))
      )
    );
  }
}
