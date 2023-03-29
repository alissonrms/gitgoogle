import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SearchRoutingModule } from './search-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ResultsComponent } from './pages/results/results.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SearchModule { }
