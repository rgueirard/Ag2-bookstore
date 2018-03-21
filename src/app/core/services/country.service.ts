import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

const countriesUrl = 'https://restcountries.eu/rest/v2/name/';

interface Country {
  translations: {
    fr: string
  };
}

@Injectable()
export class CountryService {

  constructor(private http: HttpClient) { }

  searchCountry(name: string): Observable<string[]> {
    name = name && name.trim();
    if ( name ) {
      return this.http.get<Country[]>(`${countriesUrl}${name}`)
        .pipe(
          map(
            (countries: Country[]) => countries.map((country: Country) => country.translations.fr)
          ),
          catchError(error => of([]))
        );
    } else {
      return of([]);
    }
  }
}
