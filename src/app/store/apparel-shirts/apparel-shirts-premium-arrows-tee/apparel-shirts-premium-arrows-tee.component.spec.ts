/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApparelShirtsPremiumArrowsTeeComponent } from './apparel-shirts-premium-arrows-tee.component';

describe('ApparelShirtsPremiumArrowsTeeComponent', () => {
  let component: ApparelShirtsPremiumArrowsTeeComponent;
  let fixture: ComponentFixture<ApparelShirtsPremiumArrowsTeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparelShirtsPremiumArrowsTeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparelShirtsPremiumArrowsTeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
