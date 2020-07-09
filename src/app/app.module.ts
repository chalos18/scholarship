import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CompaniesComponent } from './companies/companies';
import { RatingComponent } from './rating/rating.component';
import { BrandsComponent } from './brands/brands.component';
import { BrandMenuComponent } from './brands/brand-menu.component';
import { ExplanationsComponent } from './explanations/explanations.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: 'companies',
    component: CompaniesComponent
  },
  {
    path: 'company-detail',
    component: CompanyDetailComponent
  },
  {
    path: 'brands',
    component: BrandsComponent
  },
  {
    path: 'rating',
    component: RatingComponent
  },
  {
    path: 'explanations',
    component: ExplanationsComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: 'detail/:key',
  component: CompanyDetailComponent 
  },
];

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    BrandsComponent,
    RatingComponent,
    ExplanationsComponent,
    SearchBoxComponent,
    BrandMenuComponent,
    CompanyDetailComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
