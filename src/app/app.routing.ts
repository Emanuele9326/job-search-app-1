import { DetailPageComponent } from './detail-page/detail-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccordinCompanyComponent } from './accordin-company/accordin-company.component';
import { SearchFirstpageComponent } from './search-firstpage/search-firstpage.component';
import { SearchDetailpageComponent } from './search-detailpage/search-detailpage.component';

export const routes: Routes = [
  { path: 'first-page', component: FirstPageComponent },
  { path: 'detail-page/:id', component: DetailPageComponent },
  { path: 'accordin-company', component: AccordinCompanyComponent },
  { path: 'search-firstpage/:levels', component: SearchFirstpageComponent },
  { path: 'search-detailpage/:id/:levels', component: SearchDetailpageComponent, runGuardsAndResolvers: 'paramsChange' },
  { path: '', redirectTo: '/first-page', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
