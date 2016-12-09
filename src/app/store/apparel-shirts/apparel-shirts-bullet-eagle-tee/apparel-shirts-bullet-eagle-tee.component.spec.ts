/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApparelShirtsBulletEagleTeeComponent } from './apparel-shirts-bullet-eagle-tee.component';

describe('ApparelShirtsBulletEagleTeeComponent', () => {
  let component: ApparelShirtsBulletEagleTeeComponent;
  let fixture: ComponentFixture<ApparelShirtsBulletEagleTeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparelShirtsBulletEagleTeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparelShirtsBulletEagleTeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
