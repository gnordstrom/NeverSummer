/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApparelShirtsBoysBulletEagleTeeComponent } from './apparel-shirts-boys-bullet-eagle-tee.component';

describe('ApparelShirtsBoysBulletEagleTeeComponent', () => {
  let component: ApparelShirtsBoysBulletEagleTeeComponent;
  let fixture: ComponentFixture<ApparelShirtsBoysBulletEagleTeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparelShirtsBoysBulletEagleTeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparelShirtsBoysBulletEagleTeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
