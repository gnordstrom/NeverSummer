/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsTeamIanSmithComponent } from './snowboards-team-ian-smith.component';

describe('SnowboardsTeamIanSmithComponent', () => {
  let component: SnowboardsTeamIanSmithComponent;
  let fixture: ComponentFixture<SnowboardsTeamIanSmithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsTeamIanSmithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsTeamIanSmithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
