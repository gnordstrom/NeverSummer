/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsTeamCatherineEaglesComponent } from './snowboards-team-catherine-eagles.component';

describe('SnowboardsTeamCatherineEaglesComponent', () => {
  let component: SnowboardsTeamCatherineEaglesComponent;
  let fixture: ComponentFixture<SnowboardsTeamCatherineEaglesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsTeamCatherineEaglesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsTeamCatherineEaglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
