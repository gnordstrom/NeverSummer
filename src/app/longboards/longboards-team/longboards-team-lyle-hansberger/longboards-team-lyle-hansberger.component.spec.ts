/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LongboardsTeamLyleHansbergerComponent } from './longboards-team-lyle-hansberger.component';

describe('LongboardsTeamLyleHansbergerComponent', () => {
  let component: LongboardsTeamLyleHansbergerComponent;
  let fixture: ComponentFixture<LongboardsTeamLyleHansbergerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongboardsTeamLyleHansbergerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongboardsTeamLyleHansbergerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
