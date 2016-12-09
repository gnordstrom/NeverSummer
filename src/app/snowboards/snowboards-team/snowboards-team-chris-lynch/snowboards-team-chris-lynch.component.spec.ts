/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsTeamChrisLynchComponent } from './snowboards-team-chris-lynch.component';

describe('SnowboardsTeamChrisLynchComponent', () => {
  let component: SnowboardsTeamChrisLynchComponent;
  let fixture: ComponentFixture<SnowboardsTeamChrisLynchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsTeamChrisLynchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsTeamChrisLynchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
