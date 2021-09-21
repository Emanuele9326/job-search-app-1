import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchDetailpageComponent } from './search-detailpage/search-detailpage.component';
import { SearchFirstpageComponent } from './search-firstpage/search-firstpage.component';
import { AccordinCompanyComponent } from './accordin-company/accordin-company.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { AppRoutingModule } from './app.routing';
import { routes } from './app.routing';

import { RouterTestingModule } from '@angular/router/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { Location } from '@angular/common';
import { Router } from '@angular/router'

describe('AppRoutingModule', () => {
  let pipe: AppRoutingModule;
  let location: Location;
  let fixture;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppRoutingModule],
      imports: [RouterTestingModule.withRoutes(routes)],

      declarations: [
        FirstPageComponent,
        DetailPageComponent,
        AccordinCompanyComponent,
        SearchDetailpageComponent,
        SearchFirstpageComponent,
        PageNotFoundComponent
      ]
    });

    pipe = TestBed.inject(AppRoutingModule);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(AppComponent);
    router = TestBed.inject(Router);

    //This sets up the location change listener and performs the initial navigation.
    router.initialNavigation();

  });


  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('navigate to "" redirects you to/first-page', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/first-page');
  }));

  it('navigate to "/detail-page/:id"', fakeAsync(() => {
    router.navigate(['detail-page/:id']);
    tick();
    expect(location.path()).toBe('/detail-page/:id');
  }));

  it('navigate to "accordin-company"', fakeAsync(() => {
    router.navigate(['accordin-company']);
    tick();
    expect(location.path()).toBe('/accordin-company');
  }));

  it('navigate to "" redirects you to/detail-page/:id', fakeAsync(() => {
    router.navigate(['detail-page/:id']);
    tick();
    expect(location.path()).toBe('/detail-page/:id');
  }));


  it('navigate to "search-firstpage/:levels"', fakeAsync(() => {
    router.navigate(['search-firstpage/:levels']);
    tick();
    expect(location.path()).toBe('/search-firstpage/:levels');
  }));


  it('navigate to "search-detailpage/:id/:levels"', fakeAsync(() => {
    router.navigate(['search-detailpage/:id/:levels']);
    tick();
    expect(location.path()).toBe('/search-detailpage/:id/:levels');
  }));

  it('navigate to "**"', fakeAsync(() => {
    router.navigate(['**']);
    tick();
    expect(location.path()).toBe('/**');
  }));


});
