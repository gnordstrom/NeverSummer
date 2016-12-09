/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsTeamJakeWilliamsComponent } from './snowboards-team-jake-williams.component';

describe('SnowboardsTeamJakeWilliamsComponent', () => {
  let component: SnowboardsTeamJakeWilliamsComponent;
  let fixture: ComponentFixture<SnowboardsTeamJakeWilliamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsTeamJakeWilliamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsTeamJakeWilliamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
