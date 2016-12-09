/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApparelShirtsPremiumCorporateTeeComponent } from './apparel-shirts-premium-corporate-tee.component';

describe('ApparelShirtsPremiumCorporateTeeComponent', () => {
  let component: ApparelShirtsPremiumCorporateTeeComponent;
  let fixture: ComponentFixture<ApparelShirtsPremiumCorporateTeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparelShirtsPremiumCorporateTeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparelShirtsPremiumCorporateTeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
