/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsTeamCharlieHochComponent } from './snowboards-team-charlie-hoch.component';

describe('SnowboardsTeamCharlieHochComponent', () => {
  let component: SnowboardsTeamCharlieHochComponent;
  let fixture: ComponentFixture<SnowboardsTeamCharlieHochComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsTeamCharlieHochComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsTeamCharlieHochComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
