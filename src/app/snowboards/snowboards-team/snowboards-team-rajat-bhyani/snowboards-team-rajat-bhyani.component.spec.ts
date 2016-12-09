/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsTeamRajatBhyaniComponent } from './snowboards-team-rajat-bhyani.component';

describe('SnowboardsTeamRajatBhyaniComponent', () => {
  let component: SnowboardsTeamRajatBhyaniComponent;
  let fixture: ComponentFixture<SnowboardsTeamRajatBhyaniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsTeamRajatBhyaniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsTeamRajatBhyaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
