import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CompaniesComponent } from './companies/companies';
import { RatingComponent } from './rating/rating.component';
import { BrandsComponent } from './brands/brands.component';
import { BrandMenuComponent } from './brands/brand-menu.component';
import { ExplanationsComponent } from './explanations/explanations.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';

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
    CompanyDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
