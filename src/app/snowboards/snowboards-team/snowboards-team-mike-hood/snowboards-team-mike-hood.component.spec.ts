/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsTeamMikeHoodComponent } from './snowboards-team-mike-hood.component';

describe('SnowboardsTeamMikeHoodComponent', () => {
  let component: SnowboardsTeamMikeHoodComponent;
  let fixture: ComponentFixture<SnowboardsTeamMikeHoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsTeamMikeHoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsTeamMikeHoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
