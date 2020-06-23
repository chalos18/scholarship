import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import{
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Company } from '../company';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
