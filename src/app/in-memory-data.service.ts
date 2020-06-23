import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Company } from './company';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const companies = [
      { id: 11, name: 'Lonely' },
      { id: 12, name: 'I Love Ugly' },
      { id: 13, name: 'Commoners' },
      { id: 14, name: 'Huffer' },
      { id: 15, name: 'Stolen Girlfriends Club' },
      { id: 16, name: 'Kowtow' },
      { id: 17, name: 'Widdess' },
      { id: 18, name: 'Storm' },
      { id: 19, name: 'Trelise Cooper' },
      { id: 20, name: 'Company of Strangers' }
    ];
    return { companies };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(companies: Company[]): number { 
    return companies.length > 0 ? Math.max(...companies.map(company => company.id)) + 1:11;
  }
}
