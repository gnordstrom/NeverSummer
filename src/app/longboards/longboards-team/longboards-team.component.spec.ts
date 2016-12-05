/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LongboardsTeamComponent } from './longboards-team.component';

describe('LongboardsTeamComponent', () => {
  let component: LongboardsTeamComponent;
  let fixture: ComponentFixture<LongboardsTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongboardsTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongboardsTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
