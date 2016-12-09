/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsTeamAustinGibneyComponent } from './snowboards-team-austin-gibney.component';

describe('SnowboardsTeamAustinGibneyComponent', () => {
  let component: SnowboardsTeamAustinGibneyComponent;
  let fixture: ComponentFixture<SnowboardsTeamAustinGibneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsTeamAustinGibneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsTeamAustinGibneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
