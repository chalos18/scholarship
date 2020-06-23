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
  companies$: Observable<Company[]>;
  private searchTerms = new Subject<string>();

  constructor(private companyService: CompanyService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.companies$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.companyService.searchCompanies(term)),
    );
  }

}
