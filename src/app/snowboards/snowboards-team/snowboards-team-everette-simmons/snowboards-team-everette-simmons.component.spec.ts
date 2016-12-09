/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsTeamEveretteSimmonsComponent } from './snowboards-team-everette-simmons.component';

describe('SnowboardsTeamEveretteSimmonsComponent', () => {
  let component: SnowboardsTeamEveretteSimmonsComponent;
  let fixture: ComponentFixture<SnowboardsTeamEveretteSimmonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsTeamEveretteSimmonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsTeamEveretteSimmonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
