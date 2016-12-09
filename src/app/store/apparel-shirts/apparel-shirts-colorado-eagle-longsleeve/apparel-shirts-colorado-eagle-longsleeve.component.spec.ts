/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApparelShirtsColoradoEagleLongsleeveComponent } from './apparel-shirts-colorado-eagle-longsleeve.component';

describe('ApparelShirtsColoradoEagleLongsleeveComponent', () => {
  let component: ApparelShirtsColoradoEagleLongsleeveComponent;
  let fixture: ComponentFixture<ApparelShirtsColoradoEagleLongsleeveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparelShirtsColoradoEagleLongsleeveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparelShirtsColoradoEagleLongsleeveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
