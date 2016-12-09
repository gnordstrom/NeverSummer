/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsTeamRickRodriguezComponent } from './snowboards-team-rick-rodriguez.component';

describe('SnowboardsTeamRickRodriguezComponent', () => {
  let component: SnowboardsTeamRickRodriguezComponent;
  let fixture: ComponentFixture<SnowboardsTeamRickRodriguezComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsTeamRickRodriguezComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsTeamRickRodriguezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
