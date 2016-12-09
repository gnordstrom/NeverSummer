/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsTeamByronBagwellComponent } from './snowboards-team-byron-bagwell.component';

describe('SnowboardsTeamByronBagwellComponent', () => {
  let component: SnowboardsTeamByronBagwellComponent;
  let fixture: ComponentFixture<SnowboardsTeamByronBagwellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsTeamByronBagwellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsTeamByronBagwellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
