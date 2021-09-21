import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFirstpageComponent } from './search-firstpage.component';


describe('SearchFirstpageComponent', () => {
  let component: SearchFirstpageComponent;
  let fixture: ComponentFixture<SearchFirstpageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [SearchFirstpageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFirstpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //verify that the component was created correctly
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
