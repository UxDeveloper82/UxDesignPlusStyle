/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyportfolioListComponent } from './myportfolio-list.component';

describe('MyportfolioListComponent', () => {
  let component: MyportfolioListComponent;
  let fixture: ComponentFixture<MyportfolioListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyportfolioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyportfolioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
