/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsTeamSeanFithianComponent } from './snowboards-team-sean-fithian.component';

describe('SnowboardsTeamSeanFithianComponent', () => {
  let component: SnowboardsTeamSeanFithianComponent;
  let fixture: ComponentFixture<SnowboardsTeamSeanFithianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsTeamSeanFithianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsTeamSeanFithianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
