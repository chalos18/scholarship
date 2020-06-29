import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Company } from './company';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  
  private companiesUrl = 'api/companies'; // URL to web apia

  HttpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }
  
  /** GET companies from the server */
  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.companiesUrl)
      .pipe(
        tap(_ => this.log('fetched companies')),
        catchError(this.handleError<Company[]>('getCompanies', []))
      );
  }

  /** GET company by name. Return `undefined` when name not found */
  getCompanyNo404<Data>(name: string): Observable<Company> {
    const url = `${this.companiesUrl}/?name=${name}`;
    return this.http.get<Company[]>(url)
      .pipe(
        map(companies => companies[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} company name=${name}`);
        }),
        catchError(this.handleError<Company>(`getCompany name=${name}`))
      );
  }

  /** GET company by name. Will 404 if name not found */
  getCompany(name: string): Observable<Company> {
    const url = `${this.companiesUrl}/${name}`;
    return this.http.get<Company>(url).pipe(
      tap(_ => this.log(`fetched company name=${name}`)),
      catchError(this.handleError<Company>(`getCompany name=${name}`))
    );
  }

  /* GET companies whose name contains search term */
  searchCompanies(term: string): Observable<Company[]> {
    if (!term.trim()) {
      // if not search term, return empty company array.
      return of([]);
    }
    return this.http.get<Company[]>(`${this.companiesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found companies matching "${term}"`) :
         this.log(`no companies matching "${term}"`)),
      catchError(this.handleError<Company[]>('searchCompanies', []))
    );
  }

  /** PUT: update the company on the server */
  updateCompany(company: Company): Observable<any> {
    return this.http.put(this.companiesUrl, company, this.HttpOptions).pipe(
      tap(_ => this.log(`updated company name=${company.name}`)),
      catchError(this.handleError<any>('updateCompany'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a CompanyService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`CompanyService: ${message}`);
  }
}
