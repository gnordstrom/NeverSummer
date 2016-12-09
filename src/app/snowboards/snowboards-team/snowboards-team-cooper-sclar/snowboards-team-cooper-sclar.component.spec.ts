/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsTeamCooperSclarComponent } from './snowboards-team-cooper-sclar.component';

describe('SnowboardsTeamCooperSclarComponent', () => {
  let component: SnowboardsTeamCooperSclarComponent;
  let fixture: ComponentFixture<SnowboardsTeamCooperSclarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsTeamCooperSclarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsTeamCooperSclarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
