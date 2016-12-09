/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsTeamKevinBlueComponent } from './snowboards-team-kevin-blue.component';

describe('SnowboardsTeamKevinBlueComponent', () => {
  let component: SnowboardsTeamKevinBlueComponent;
  let fixture: ComponentFixture<SnowboardsTeamKevinBlueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsTeamKevinBlueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsTeamKevinBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
