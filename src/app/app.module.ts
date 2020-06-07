import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './header/home/home.component';
import { RatingComponent } from './header/rating/rating.component';
import { BrandsComponent } from './header/brands/brands.component';
import { ExplanationsComponent } from './header/explanations/explanations.component';
import { SearchBoxComponent } from './header/search-box/search-box.component';
import { BrandMenuComponent } from './header/brands/brand-menu.component';

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)

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
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
