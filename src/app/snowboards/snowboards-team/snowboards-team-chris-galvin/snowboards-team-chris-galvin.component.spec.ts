/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsTeamChrisGalvinComponent } from './snowboards-team-chris-galvin.component';

describe('SnowboardsTeamChrisGalvinComponent', () => {
  let component: SnowboardsTeamChrisGalvinComponent;
  let fixture: ComponentFixture<SnowboardsTeamChrisGalvinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsTeamChrisGalvinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsTeamChrisGalvinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
