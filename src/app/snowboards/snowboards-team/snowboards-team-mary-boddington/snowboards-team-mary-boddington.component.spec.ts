/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsTeamMaryBoddingtonComponent } from './snowboards-team-mary-boddington.component';

describe('SnowboardsTeamMaryBoddingtonComponent', () => {
  let component: SnowboardsTeamMaryBoddingtonComponent;
  let fixture: ComponentFixture<SnowboardsTeamMaryBoddingtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsTeamMaryBoddingtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsTeamMaryBoddingtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
