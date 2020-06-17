import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { COMPANIES } from '../moch-companies';
import { CompanyDetailComponent } from '../company-detail/company-detail.component';
import { CompanyService } from '../company.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  selectedCompany: Company;

  companies: Company[];

  getCompanies(): void {
    this.companyService.getCompanies().subscribe(companies => this.companies = companies);
  }

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  onSelect(company: Company): void {
    this.selectedCompany = company;
  }
}
