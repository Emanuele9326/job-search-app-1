/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AccordinCompanyComponent } from './accordin-company.component';

describe('AccordinCompanyComponent', () => {
  let component: AccordinCompanyComponent;
  let fixture: ComponentFixture<AccordinCompanyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AccordinCompanyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordinCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  //test that @Input works correctly
  it('should correctly render the passed @Input value "company"', () => {
    component.company = 'Amazon';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('li').textContent).toBe('Name: Amazon');

  })

  it('should correctly render the passed @Input value "id"', () => {
    component.id = '4';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#id').textContent).toBe('id: 4');

  })
});
