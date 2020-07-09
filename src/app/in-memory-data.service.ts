import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const companies = [
      { key: 'lon001', name: 'Lonely' },
      { key: 'ilu001', name: 'I Love Ugly' },
      { key: 'com001', name: 'Commoners' },
      { key: 'huf001', name: 'Huffer' },
      { key: 'sgc', name: 'Stolen Girlfriends Club' },
      { key: 'kow', name: 'Kowtow' },
      { key: 'wid', name: 'Widdess' },
      { key: 'sto', name: 'Storm' },
      { key: 'tre', name: 'Trelise Cooper' },
      { key: 'com002', name: 'Company of Strangers' }
    ];
    const companydetail = [
      { id: 'lon001', phone: '555-1234' , description: 'This is a description for company "lon001".'},
      { id: 'ilu001', phone: '555-4567' , description: 'This is a description for company "ilu001".'},
      { id: 'com001', phone: '555-7890' , description: 'This is a description for company "com001".'},
      { id: 'huf001', phone: '555-2222' , description: 'This is a description for company "huf001".'},
      { id: 'sgc', phone: '555-3333' , description: 'This is a description for company "sgc".'},
      { id: 'kow', phone: '555-4444' , description: 'This is a description for company "kow".'},
      { id: 'wid', phone: '555-5555' , description: 'This is a description for company "wid".'},
      { id: 'sto', phone: '555-6666' , description: 'This is a description for company "sto".'},
      { id: 'tre', phone: '555-7777' , description: 'This is a description for company "tre".'},
      { id: 'com002', phone: '555-8888' , description: 'This is a description for company "com002".'},
    ];
    return { companies, companydetail };
  }
}
