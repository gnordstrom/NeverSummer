/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsTeamJasonHindmanComponent } from './snowboards-team-jason-hindman.component';

describe('SnowboardsTeamJasonHindmanComponent', () => {
  let component: SnowboardsTeamJasonHindmanComponent;
  let fixture: ComponentFixture<SnowboardsTeamJasonHindmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsTeamJasonHindmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsTeamJasonHindmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
