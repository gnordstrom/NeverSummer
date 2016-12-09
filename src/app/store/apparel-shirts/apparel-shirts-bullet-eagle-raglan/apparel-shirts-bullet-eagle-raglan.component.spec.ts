/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApparelShirtsBulletEagleRaglanComponent } from './apparel-shirts-bullet-eagle-raglan.component';

describe('ApparelShirtsBulletEagleRaglanComponent', () => {
  let component: ApparelShirtsBulletEagleRaglanComponent;
  let fixture: ComponentFixture<ApparelShirtsBulletEagleRaglanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparelShirtsBulletEagleRaglanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparelShirtsBulletEagleRaglanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
