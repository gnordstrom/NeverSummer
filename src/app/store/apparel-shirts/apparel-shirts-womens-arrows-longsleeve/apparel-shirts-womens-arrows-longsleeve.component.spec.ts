/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApparelShirtsWomensArrowsLongsleeveComponent } from './apparel-shirts-womens-arrows-longsleeve.component';

describe('ApparelShirtsWomensArrowsLongsleeveComponent', () => {
  let component: ApparelShirtsWomensArrowsLongsleeveComponent;
  let fixture: ComponentFixture<ApparelShirtsWomensArrowsLongsleeveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparelShirtsWomensArrowsLongsleeveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparelShirtsWomensArrowsLongsleeveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
