/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ns25GreyComponent } from './ns25-grey.component';

describe('Ns25GreyComponent', () => {
  let component: Ns25GreyComponent;
  let fixture: ComponentFixture<Ns25GreyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ns25GreyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ns25GreyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
