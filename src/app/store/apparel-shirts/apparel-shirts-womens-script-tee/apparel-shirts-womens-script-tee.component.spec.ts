/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApparelShirtsWomensScriptTeeComponent } from './apparel-shirts-womens-script-tee.component';

describe('ApparelShirtsWomensScriptTeeComponent', () => {
  let component: ApparelShirtsWomensScriptTeeComponent;
  let fixture: ComponentFixture<ApparelShirtsWomensScriptTeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparelShirtsWomensScriptTeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparelShirtsWomensScriptTeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
