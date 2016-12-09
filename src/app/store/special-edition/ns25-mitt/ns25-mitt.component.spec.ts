/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ns25MittComponent } from './ns25-mitt.component';

describe('Ns25MittComponent', () => {
  let component: Ns25MittComponent;
  let fixture: ComponentFixture<Ns25MittComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ns25MittComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ns25MittComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
