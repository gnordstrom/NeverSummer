/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsTeamJacobCareyComponent } from './snowboards-team-jacob-carey.component';

describe('SnowboardsTeamJacobCareyComponent', () => {
  let component: SnowboardsTeamJacobCareyComponent;
  let fixture: ComponentFixture<SnowboardsTeamJacobCareyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsTeamJacobCareyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsTeamJacobCareyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
