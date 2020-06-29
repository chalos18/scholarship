import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const companies = [
      { name: 'Lonely' },
      { name: 'I Love Ugly' },
      { name: 'Commoners' },
      { name: 'Huffer' },
      { name: 'Stolen Girlfriends Club' },
      { name: 'Kowtow' },
      { name: 'Widdess' },
      { name: 'Storm' },
      { name: 'Trelise Cooper' },
      { name: 'Company of Strangers' }
    ];
    return { companies };
  }
}
