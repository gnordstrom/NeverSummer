/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsTeamBradyFarrComponent } from './snowboards-team-brady-farr.component';

describe('SnowboardsTeamBradyFarrComponent', () => {
  let component: SnowboardsTeamBradyFarrComponent;
  let fixture: ComponentFixture<SnowboardsTeamBradyFarrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsTeamBradyFarrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsTeamBradyFarrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
