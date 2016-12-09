/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LongboardsTeamDaveMortonComponent } from './longboards-team-dave-morton.component';

describe('LongboardsTeamDaveMortonComponent', () => {
  let component: LongboardsTeamDaveMortonComponent;
  let fixture: ComponentFixture<LongboardsTeamDaveMortonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongboardsTeamDaveMortonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongboardsTeamDaveMortonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
