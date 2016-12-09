/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsTeamBrockButterfieldComponent } from './snowboards-team-brock-butterfield.component';

describe('SnowboardsTeamBrockButterfieldComponent', () => {
  let component: SnowboardsTeamBrockButterfieldComponent;
  let fixture: ComponentFixture<SnowboardsTeamBrockButterfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsTeamBrockButterfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsTeamBrockButterfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
