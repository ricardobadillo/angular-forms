// Angular.
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Modelos.
import { Country } from '../models/country';
import { Region } from '../models/region';

// RXJS.
import { combineLatest, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({ providedIn: 'root' })
export class SelectorCountryService {

  private baseUrl: string = 'https://restcountries.com/v3.1';
  private _regiones: Array<Region> = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

  get regiones(): Array<Region> {
    return [ ...this._regiones ];
  }

  constructor( private http: HttpClient) { }

  getCountriesByRegion(region: string): Observable<Array<Country>> {
    return this.http.get<Array<Country>>(`${this.baseUrl}/region/${region}?fields=name,cca3`);
  };

  getCountryByAlphaCode(code: string): Observable<Country | null> {

    if (!code) return of(null);

    return this.http.get<Country | null>(`${this.baseUrl}/alpha/${code}`)
      .pipe(map(pais => pais instanceof Array ? pais[0] : pais));
  };

  getCountryNameByAlphaCode(code: string): Observable<Country> {
    return this.http.get<Country>(`${this.baseUrl}/alpha/${code}?fields=cca3,name`);
  };

  getCountriesByBorders(borders: Array<string>): Observable<Array<Country>> {

    if (!borders) return of([]);

    const requests: Observable<Country>[] = [];

    borders.forEach(code => {
      const request = this.getCountryNameByAlphaCode(code);
      requests.push(request);
    });

    return combineLatest(requests);
  };
}
