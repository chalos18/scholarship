import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { CompanyService } from '../company.service';
import { Company } from '../company';


@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {

  @Input() company: Company;

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getCompany();
  }

  goBack(): void {
    this.location.back();
  }

  getCompany(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.companyService.getCompany(id).subscribe(company => this.company = company);
  }

}
