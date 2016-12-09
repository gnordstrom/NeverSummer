/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsTeamAndrewBuerginComponent } from './snowboards-team-andrew-buergin.component';

describe('SnowboardsTeamAndrewBuerginComponent', () => {
  let component: SnowboardsTeamAndrewBuerginComponent;
  let fixture: ComponentFixture<SnowboardsTeamAndrewBuerginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsTeamAndrewBuerginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsTeamAndrewBuerginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
