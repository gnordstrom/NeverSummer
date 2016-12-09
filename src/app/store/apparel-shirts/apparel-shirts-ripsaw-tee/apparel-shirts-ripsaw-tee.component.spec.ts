/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApparelShirtsRipsawTeeComponent } from './apparel-shirts-ripsaw-tee.component';

describe('ApparelShirtsRipsawTeeComponent', () => {
  let component: ApparelShirtsRipsawTeeComponent;
  let fixture: ComponentFixture<ApparelShirtsRipsawTeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparelShirtsRipsawTeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparelShirtsRipsawTeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
