/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApparelShirtsWomensColoradoEagleTeeComponent } from './apparel-shirts-womens-colorado-eagle-tee.component';

describe('ApparelShirtsWomensColoradoEagleTeeComponent', () => {
  let component: ApparelShirtsWomensColoradoEagleTeeComponent;
  let fixture: ComponentFixture<ApparelShirtsWomensColoradoEagleTeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparelShirtsWomensColoradoEagleTeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparelShirtsWomensColoradoEagleTeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
