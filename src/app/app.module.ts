import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { MatSidenavModule } from '@angular/material/sidenav';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CompaniesComponent } from './companies/companies';
import { SearchBoxComponent } from './search-box/search-box.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { RatingsComponent } from './ratings/ratings.component';
import { TopCompaniesComponent } from './top-companies/top-companies.component';

const routes: Routes = [
  {
    path: 'company-detail',
    component: CompanyDetailComponent
  },
  {
    path: 'ratings',
    component: RatingsComponent
  },
  {
    path: 'top-companies',
    component: TopCompaniesComponent
  },
  { path: 'detail/:key',
  component: CompanyDetailComponent 
  },
];

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    SearchBoxComponent,
    CompanyDetailComponent,
    RatingsComponent,
    TopCompaniesComponent,
  ],
  exports: [
    MatSidenavModule,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    MatSidenavModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    
    BrowserAnimationsModule,
    LayoutModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
