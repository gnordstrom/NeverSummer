/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ns25KnifeComponent } from './ns25-knife.component';

describe('Ns25KnifeComponent', () => {
  let component: Ns25KnifeComponent;
  let fixture: ComponentFixture<Ns25KnifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ns25KnifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ns25KnifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
