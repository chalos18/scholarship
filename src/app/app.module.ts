import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './header/home/home.component';
import { RatingComponent } from './header/rating/rating.component';
import { BrandsComponent } from './header/brands/brands.component';
import { ExplanationsComponent } from './header/explanations/explanations.component';
import { SearchBoxComponent } from './header/search-box/search-box.component';
import { BrandMenuComponent } from './header/brands/brand-menu.component';

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
    BrandMenuComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
