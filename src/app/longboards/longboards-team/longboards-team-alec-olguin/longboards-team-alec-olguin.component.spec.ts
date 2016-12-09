/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LongboardsTeamAlecOlguinComponent } from './longboards-team-alec-olguin.component';

describe('LongboardsTeamAlecOlguinComponent', () => {
  let component: LongboardsTeamAlecOlguinComponent;
  let fixture: ComponentFixture<LongboardsTeamAlecOlguinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongboardsTeamAlecOlguinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongboardsTeamAlecOlguinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
