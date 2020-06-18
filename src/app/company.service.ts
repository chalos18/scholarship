import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Company } from './company';
import { COMPANIES } from './moch-companies';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private messageService: MessageService) { }

  getCompanies(): Observable<Company[]> {
    // TODO: send the message _after_fetching the heroes
    this.messageService.add('CompanyService: fetched companies');
    return of(COMPANIES);
  }
  
  getCompany(id: number): Observable<Company> {
    // TODO:send the message _after_fetching the hero
    this.messageService.add(`CompanyService: fetched company id=${id}`);
    return of(COMPANIES.find(company => company.id === id));
  }
}
