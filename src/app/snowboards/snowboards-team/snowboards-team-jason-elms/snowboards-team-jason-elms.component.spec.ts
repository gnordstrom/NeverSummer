/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsTeamJasonElmsComponent } from './snowboards-team-jason-elms.component';

describe('SnowboardsTeamJasonElmsComponent', () => {
  let component: SnowboardsTeamJasonElmsComponent;
  let fixture: ComponentFixture<SnowboardsTeamJasonElmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsTeamJasonElmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsTeamJasonElmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
