/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ns25CamoflaugeComponent } from './ns25-camoflauge.component';

describe('Ns25CamoflaugeComponent', () => {
  let component: Ns25CamoflaugeComponent;
  let fixture: ComponentFixture<Ns25CamoflaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ns25CamoflaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ns25CamoflaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
