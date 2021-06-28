import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { INace } from 'src/util/nace.interface';

@Injectable({
  providedIn: 'root'
})
export class OptionOneService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllNaceList(): Observable<any> {
    return this.httpClient.get('/gft/nace/list').pipe(concatMap((resp: INace) => {
      return of(resp);
    }));
  }

}
