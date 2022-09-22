// Angular.
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Modelos.
import { Country } from '../models/country';
import { CountryFull } from '../models/country-full';

// RXJS.
import { combineLatest, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SelectorCountryService {
  
  private baseUrl: string = 'https://restcountries.com/v3.1';
  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

  get regiones() {
    return [... this._regiones];
  }

  constructor( private http: HttpClient) { }

  getCountriesForRegion(region: string): Observable<Country[]> {
    
    const url: string = `${this.baseUrl}/region/${region}?fields=name,cca3`;

    return this.http.get<Country[]>(url);
  };

  getCountryForAlphaCode(code: string): Observable<CountryFull | null> {

    if (!code) {
      return of(null);
    };

    const url: string = `${this.baseUrl}/alpha/${code}`;

    return this.http.get<CountryFull | null>(url)
      .pipe(map(pais => pais instanceof Array ? pais[0] : pais));
  };

  getCountryNameForAlphaCode(code: string): Observable<Country> {

    const url: string = `${this.baseUrl}/alpha/${code}?fields=cca3,name`;

    return this.http.get<Country>(url);
  };

  getCountriesByBorders(borders: string[]): Observable<Country[]> {
    
    if (!borders) {
      return of([]);
    };

    const requests: Observable<Country>[] = [];
  
    borders.forEach(code => {
      const request = this.getCountryNameForAlphaCode(code);
      requests.push(request);
    });

    return combineLatest(requests);
  };
}
