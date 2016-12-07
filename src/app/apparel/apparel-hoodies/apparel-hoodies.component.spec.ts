/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApparelHoodiesComponent } from './apparel-hoodies.component';

describe('ApparelHoodiesComponent', () => {
  let component: ApparelHoodiesComponent;
  let fixture: ComponentFixture<ApparelHoodiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparelHoodiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparelHoodiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
