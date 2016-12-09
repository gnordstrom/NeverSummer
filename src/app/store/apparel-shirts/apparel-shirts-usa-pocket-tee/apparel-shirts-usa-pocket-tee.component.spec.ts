/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApparelShirtsUsaPocketTeeComponent } from './apparel-shirts-usa-pocket-tee.component';

describe('ApparelShirtsUsaPocketTeeComponent', () => {
  let component: ApparelShirtsUsaPocketTeeComponent;
  let fixture: ComponentFixture<ApparelShirtsUsaPocketTeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparelShirtsUsaPocketTeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparelShirtsUsaPocketTeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
