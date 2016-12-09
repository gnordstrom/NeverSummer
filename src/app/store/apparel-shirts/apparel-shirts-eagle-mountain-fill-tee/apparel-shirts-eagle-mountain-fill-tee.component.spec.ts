/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApparelShirtsEagleMountainFillTeeComponent } from './apparel-shirts-eagle-mountain-fill-tee.component';

describe('ApparelShirtsEagleMountainFillTeeComponent', () => {
  let component: ApparelShirtsEagleMountainFillTeeComponent;
  let fixture: ComponentFixture<ApparelShirtsEagleMountainFillTeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparelShirtsEagleMountainFillTeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparelShirtsEagleMountainFillTeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
