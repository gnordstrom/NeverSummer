/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsTeamCaseyLucasComponent } from './snowboards-team-casey-lucas.component';

describe('SnowboardsTeamCaseyLucasComponent', () => {
  let component: SnowboardsTeamCaseyLucasComponent;
  let fixture: ComponentFixture<SnowboardsTeamCaseyLucasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsTeamCaseyLucasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsTeamCaseyLucasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
