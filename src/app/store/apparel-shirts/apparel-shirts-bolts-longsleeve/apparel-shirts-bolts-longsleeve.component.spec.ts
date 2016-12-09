/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApparelShirtsBoltsLongsleeveComponent } from './apparel-shirts-bolts-longsleeve.component';

describe('ApparelShirtsBoltsLongsleeveComponent', () => {
  let component: ApparelShirtsBoltsLongsleeveComponent;
  let fixture: ComponentFixture<ApparelShirtsBoltsLongsleeveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparelShirtsBoltsLongsleeveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparelShirtsBoltsLongsleeveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
