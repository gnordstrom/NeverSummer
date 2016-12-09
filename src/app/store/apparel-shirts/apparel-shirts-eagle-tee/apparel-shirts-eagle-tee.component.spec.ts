/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApparelShirtsEagleTeeComponent } from './apparel-shirts-eagle-tee.component';

describe('ApparelShirtsEagleTeeComponent', () => {
  let component: ApparelShirtsEagleTeeComponent;
  let fixture: ComponentFixture<ApparelShirtsEagleTeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparelShirtsEagleTeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparelShirtsEagleTeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
