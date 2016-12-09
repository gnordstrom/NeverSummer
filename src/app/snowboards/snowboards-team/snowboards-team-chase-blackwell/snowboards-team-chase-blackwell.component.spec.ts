/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsTeamChaseBlackwellComponent } from './snowboards-team-chase-blackwell.component';

describe('SnowboardsTeamChaseBlackwellComponent', () => {
  let component: SnowboardsTeamChaseBlackwellComponent;
  let fixture: ComponentFixture<SnowboardsTeamChaseBlackwellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsTeamChaseBlackwellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsTeamChaseBlackwellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
