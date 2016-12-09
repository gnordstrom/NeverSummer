/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApparelShirtsWomensProtoRaglanComponent } from './apparel-shirts-womens-proto-raglan.component';

describe('ApparelShirtsWomensProtoRaglanComponent', () => {
  let component: ApparelShirtsWomensProtoRaglanComponent;
  let fixture: ComponentFixture<ApparelShirtsWomensProtoRaglanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparelShirtsWomensProtoRaglanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparelShirtsWomensProtoRaglanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
