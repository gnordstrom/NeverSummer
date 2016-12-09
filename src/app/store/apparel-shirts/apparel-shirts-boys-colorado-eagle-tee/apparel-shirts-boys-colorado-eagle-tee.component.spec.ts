/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApparelShirtsBoysColoradoEagleTeeComponent } from './apparel-shirts-boys-colorado-eagle-tee.component';

describe('ApparelShirtsBoysColoradoEagleTeeComponent', () => {
  let component: ApparelShirtsBoysColoradoEagleTeeComponent;
  let fixture: ComponentFixture<ApparelShirtsBoysColoradoEagleTeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparelShirtsBoysColoradoEagleTeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparelShirtsBoysColoradoEagleTeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
