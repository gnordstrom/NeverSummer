/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsTeamTonyPavlantosComponent } from './snowboards-team-tony-pavlantos.component';

describe('SnowboardsTeamTonyPavlantosComponent', () => {
  let component: SnowboardsTeamTonyPavlantosComponent;
  let fixture: ComponentFixture<SnowboardsTeamTonyPavlantosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsTeamTonyPavlantosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsTeamTonyPavlantosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
