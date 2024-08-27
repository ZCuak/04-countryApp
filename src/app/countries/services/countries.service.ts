import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiURl: string = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) { }

  searchByCapital( term: string ): Observable<Country[]>{
    const url = `${ this.apiURl }/capital/${ term }`
    return this.http.get<Country[]>( url )
      .pipe(
        catchError( error => of([]) )
      );
  }
  searchByCountry( term: string ): Observable<Country[]>{
    const url = `${ this.apiURl }/name/${ term }`
    return this.http.get<Country[]>( url )
      .pipe(
        catchError( error => of([]) )
      );
  }
  searchByRegion( term: string ): Observable<Country[]>{
    const url = `${ this.apiURl }/region/${ term }`
    return this.http.get<Country[]>( url )
      .pipe(
        catchError( error => of([]) )
      );
  }


  searchCountryByAlphaCode( code: string ): Observable<Country | null>{
    const url = `${ this.apiURl }/alpha/${ code }`
    return this.http.get<Country[]>( url )
      .pipe(
        map( countries => countries.length > 0 ? countries[0]: null ),
        catchError( error => of(null) )
      );
  }
}
