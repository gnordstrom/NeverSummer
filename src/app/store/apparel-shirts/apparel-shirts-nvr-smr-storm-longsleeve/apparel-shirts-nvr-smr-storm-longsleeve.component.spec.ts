/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApparelShirtsNvrSmrStormLongsleeveComponent } from './apparel-shirts-nvr-smr-storm-longsleeve.component';

describe('ApparelShirtsNvrSmrStormLongsleeveComponent', () => {
  let component: ApparelShirtsNvrSmrStormLongsleeveComponent;
  let fixture: ComponentFixture<ApparelShirtsNvrSmrStormLongsleeveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparelShirtsNvrSmrStormLongsleeveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparelShirtsNvrSmrStormLongsleeveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
