import { Component, OnInit, Input } from '@angular/core';
import { Location, LocationStrategy } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { CompanyService } from '../company.service';
import { Company } from '../company';
import { CompanyDetail } from '../companydetail';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {

  @Input() company: Company;

  companyDetail : CompanyDetail;
  
  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private location: Location,
  ) { }

  ngOnInit(): void { 
    this.route.params.subscribe(params => {
      let key = params['key'];
      this.companyService.getCompanyDetail(key).subscribe(detail => {
        // shows the detail on the page
        this.companyDetail = detail;
      });
    });
  }

  goBack(): void {
    this.location.back();
  }


}
