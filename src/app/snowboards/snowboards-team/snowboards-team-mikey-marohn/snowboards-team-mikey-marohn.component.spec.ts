/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsTeamMikeyMarohnComponent } from './snowboards-team-mikey-marohn.component';

describe('SnowboardsTeamMikeyMarohnComponent', () => {
  let component: SnowboardsTeamMikeyMarohnComponent;
  let fixture: ComponentFixture<SnowboardsTeamMikeyMarohnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsTeamMikeyMarohnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsTeamMikeyMarohnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
