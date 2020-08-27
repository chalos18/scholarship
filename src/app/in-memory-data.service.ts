import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    // Database that keeps each unique key for each brand
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
    // For the company-detail page
    // I need to substitute the phone for something that better describes the brand
    const companydetail = [
      { id: 'lon001', title: 'Lonely' , description: 'This is a description for company "lon001".'},
      { id: 'ilu001', title: 'I Love Ugly' , description: 'This is a description for company "ilu001".'},
      { id: 'com001', title: 'Commoners' , description: 'This is a description for company "com001".'},
      { id: 'huf001', title: 'Huffer' , description: 'This is a description for company "huf001".'},
      { id: 'sgc', title: 'Stolen Girlfriends CLub' , description: 'This is a description for company "sgc".'},
      { id: 'kow', title: 'Kowtow' , description: 'This is a description for company "kow".'},
      { id: 'wid', title: 'Widdess' , description: 'This is a description for company "wid".'},
      { id: 'sto', title: 'Storm' , description: 'This is a description for company "sto".'},
      { id: 'tre', title: 'Trelise Cooper' , description: 'This is a description for company "tre".'},
      { id: 'com002', title: 'Company of Strangers' , description: 'This is a description for company "com002".'},
    ];
    return { companies, companydetail };
  }
}
