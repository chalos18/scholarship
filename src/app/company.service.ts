import { Injectable } from '@angular/core';
import { Company } from './company';
import { COMPANIES } from './moch-companies';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  getCompanies(): Observable<Company[]> {
    return of(COMPANIES);
  }

  constructor() { }
}
