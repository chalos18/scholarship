import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { COMPANIES } from '../moch-companies';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  companies = COMPANIES;
  
  selectedCompany: Company;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(company: Company): void {
    this.selectedCompany = company;
  }
}
