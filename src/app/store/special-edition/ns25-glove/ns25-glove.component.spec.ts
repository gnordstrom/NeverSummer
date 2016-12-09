/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ns25GloveComponent } from './ns25-glove.component';

describe('Ns25GloveComponent', () => {
  let component: Ns25GloveComponent;
  let fixture: ComponentFixture<Ns25GloveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ns25GloveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ns25GloveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
