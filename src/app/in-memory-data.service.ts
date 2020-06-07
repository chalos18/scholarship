import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { HomeComponent } from '../app/header/home/home.component';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { name: 'Dr Nice' },
      { name: 'Narco' },
      { name: 'Bombasto' },
      { name: 'Celeritas' },
      { name: 'Magneta' },
      { name: 'RubberMan' },
      { name: 'Dynama' },
      { name: 'Dr IQ' },
      { name: 'Magma' },
      { name: 'Tornado' }
    ];
    return{heroes};
  }


  constructor() { }
}