/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApparelShirtsRipsawRaglanTeeComponent } from './apparel-shirts-ripsaw-raglan-tee.component';

describe('ApparelShirtsRipsawRaglanTeeComponent', () => {
  let component: ApparelShirtsRipsawRaglanTeeComponent;
  let fixture: ComponentFixture<ApparelShirtsRipsawRaglanTeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparelShirtsRipsawRaglanTeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparelShirtsRipsawRaglanTeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
