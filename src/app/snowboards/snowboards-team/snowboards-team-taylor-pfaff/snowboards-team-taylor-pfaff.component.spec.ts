/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsTeamTaylorPfaffComponent } from './snowboards-team-taylor-pfaff.component';

describe('SnowboardsTeamTaylorPfaffComponent', () => {
  let component: SnowboardsTeamTaylorPfaffComponent;
  let fixture: ComponentFixture<SnowboardsTeamTaylorPfaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsTeamTaylorPfaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsTeamTaylorPfaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
