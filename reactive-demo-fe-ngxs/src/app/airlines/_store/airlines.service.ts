import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { Airline } from './airlines.model';


@Injectable()
export class AirlinesService {

  constructor(private _http: HttpClient) {
  }

  getAirlineList(country: string): Observable<Airline[]> {
    return this._http
      .get<Airline[]>(
        `/api/airline/${country}`
      )
      .pipe(
        catchError((err: Response) => Observable.throw(err.json()))
      );
  }


  setFavorite(id: number, favorite: boolean) {
    return this._http
      .get<Airline>(
        `/api/airline/${id}/${favorite}`
      );
  }
}