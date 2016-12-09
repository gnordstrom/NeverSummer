/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsTeamNateSheehanComponent } from './snowboards-team-nate-sheehan.component';

describe('SnowboardsTeamNateSheehanComponent', () => {
  let component: SnowboardsTeamNateSheehanComponent;
  let fixture: ComponentFixture<SnowboardsTeamNateSheehanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsTeamNateSheehanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsTeamNateSheehanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
