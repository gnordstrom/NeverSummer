/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsTeamNickDeciccoComponent } from './snowboards-team-nick-decicco.component';

describe('SnowboardsTeamNickDeciccoComponent', () => {
  let component: SnowboardsTeamNickDeciccoComponent;
  let fixture: ComponentFixture<SnowboardsTeamNickDeciccoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsTeamNickDeciccoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsTeamNickDeciccoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
