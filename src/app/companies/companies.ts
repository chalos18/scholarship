import { Component, OnInit } from '@angular/core';

import { Company } from '../company';
import { CompanyService } from '../company.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  selectedCompany: Company;

  companies: Company[];

  constructor(private companyService: CompanyService, private messageService: MessageService) { }

  ngOnInit() {
    this.getCompanies();
  }

  onSelect(company: Company): void {
    this.selectedCompany = company;
    this.messageService.add(`CompanyService: Selected company id=${company.id}`);
  }

  getCompanies(): void {
    this.companyService.getCompanies().subscribe(companies => this.companies = companies);
  }
}
