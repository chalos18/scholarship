import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { COMPANIES } from '../moch-companies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  company = COMPANIES;
  
  selectedCompany: Company;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(company: Company): void {
    this.selectedCompany = company;
  }
}
