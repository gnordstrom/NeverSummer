/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApparelShirtsColoradoEagleTeeComponent } from './apparel-shirts-colorado-eagle-tee.component';

describe('ApparelShirtsColoradoEagleTeeComponent', () => {
  let component: ApparelShirtsColoradoEagleTeeComponent;
  let fixture: ComponentFixture<ApparelShirtsColoradoEagleTeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparelShirtsColoradoEagleTeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparelShirtsColoradoEagleTeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
