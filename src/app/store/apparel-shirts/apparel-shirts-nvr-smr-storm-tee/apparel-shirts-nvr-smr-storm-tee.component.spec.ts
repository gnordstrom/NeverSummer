/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApparelShirtsNvrSmrStormTeeComponent } from './apparel-shirts-nvr-smr-storm-tee.component';

describe('ApparelShirtsNvrSmrStormTeeComponent', () => {
  let component: ApparelShirtsNvrSmrStormTeeComponent;
  let fixture: ComponentFixture<ApparelShirtsNvrSmrStormTeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparelShirtsNvrSmrStormTeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparelShirtsNvrSmrStormTeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
