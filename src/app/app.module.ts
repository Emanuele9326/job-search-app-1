import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { FirstPageComponent } from './first-page/first-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { SearchFirstpageComponent } from './search-firstpage/search-firstpage.component';
import { SearchDetailpageComponent } from './search-detailpage/search-detailpage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AccordinCompanyComponent } from './accordin-company/accordin-company.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion'








@NgModule({
  declarations: [
    AppComponent,
      FirstPageComponent,
      PageNotFoundComponent,
      DetailPageComponent,
      AccordinCompanyComponent,
      SearchBarComponent,
      SearchFirstpageComponent,
      SearchDetailpageComponent,

   ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    FormsModule,
    FontAwesomeModule

  ],

  providers: [],
  bootstrap: [AppComponent]


})
export class AppModule { }
