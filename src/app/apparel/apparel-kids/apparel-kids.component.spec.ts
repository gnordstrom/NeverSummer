/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApparelKidsComponent } from './apparel-kids.component';

describe('ApparelKidsComponent', () => {
  let component: ApparelKidsComponent;
  let fixture: ComponentFixture<ApparelKidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparelKidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparelKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
