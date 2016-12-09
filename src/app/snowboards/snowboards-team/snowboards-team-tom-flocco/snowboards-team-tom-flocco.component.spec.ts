/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsTeamTomFloccoComponent } from './snowboards-team-tom-flocco.component';

describe('SnowboardsTeamTomFloccoComponent', () => {
  let component: SnowboardsTeamTomFloccoComponent;
  let fixture: ComponentFixture<SnowboardsTeamTomFloccoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsTeamTomFloccoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsTeamTomFloccoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
