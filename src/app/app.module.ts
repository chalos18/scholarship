import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RatingComponent } from './rating/rating.component';
import { BrandsComponent } from './brands/brands.component';
import { BrandMenuComponent } from './brands/brand-menu.component';
import { ExplanationsComponent } from './explanations/explanations.component';
import { SearchBoxComponent } from './search-box/search-box.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
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
    HomeComponent,
    BrandsComponent,
    RatingComponent,
    ExplanationsComponent,
    SearchBoxComponent,
    BrandMenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
