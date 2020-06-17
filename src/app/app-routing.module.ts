import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompaniesComponent } from './companies/companies'

const routes: Routes = [
  { path: 'companies', component: CompaniesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
