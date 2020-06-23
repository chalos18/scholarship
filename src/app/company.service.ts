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

  /** GET company by id. Return `undefined` when id not found */
  getCompanyNo404<Data>(id: number): Observable<Company> {
    const url = `${this.companiesUrl}/?id=${id}`;
    return this.http.get<Company[]>(url)
      .pipe(
        map(companies => companies[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} company id=${id}`);
        }),
        catchError(this.handleError<Company>(`getCompany id=${id}`))
      );
  }

  /** GET company by id. Will 404 if id not found */
  getCompany(id: number): Observable<Company> {
    const url = `${this.companiesUrl}/${id}`;
    return this.http.get<Company>(url).pipe(
      tap(_ => this.log(`fetched company id=${id}`)),
      catchError(this.handleError<Company>(`getCompany id=${id}`))
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

  //////// Save methods //////////

  /** POST: add a new company to the server */
  addCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(this.companiesUrl, company, this.HttpOptions).pipe(
      tap((newCompany: Company) => this.log(`added company w/ id=${newCompany.id}`)),
      catchError(this.handleError<Company>('addCompany'))
    );
  }

  /** DELETE: delete the company from the server */
  deleteCompany(company: Company | number): Observable<Company> {
    const id = typeof company === 'number' ? company : company.id;
    const url = `${this.companiesUrl}/${id}`;

    return this.http.delete<Company>(url, this.HttpOptions).pipe(
      tap(_ => this.log(`deleted company id=${id}`)),
      catchError(this.handleError<Company>('deleteCompany'))
    );
  }

  /** PUT: update the company on the server */
  updateCompany(company: Company): Observable<any> {
    return this.http.put(this.companiesUrl, company, this.HttpOptions).pipe(
      tap(_ => this.log(`updated company id=${company.id}`)),
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

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}