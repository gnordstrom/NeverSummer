/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsTeamJustinHeniginComponent } from './snowboards-team-justin-henigin.component';

describe('SnowboardsTeamJustinHeniginComponent', () => {
  let component: SnowboardsTeamJustinHeniginComponent;
  let fixture: ComponentFixture<SnowboardsTeamJustinHeniginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsTeamJustinHeniginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsTeamJustinHeniginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
