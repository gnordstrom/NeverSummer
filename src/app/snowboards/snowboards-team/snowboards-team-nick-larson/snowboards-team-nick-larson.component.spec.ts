/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsTeamNickLarsonComponent } from './snowboards-team-nick-larson.component';

describe('SnowboardsTeamNickLarsonComponent', () => {
  let component: SnowboardsTeamNickLarsonComponent;
  let fixture: ComponentFixture<SnowboardsTeamNickLarsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsTeamNickLarsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsTeamNickLarsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
