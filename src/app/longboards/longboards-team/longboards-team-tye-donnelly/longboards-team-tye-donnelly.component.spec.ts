/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LongboardsTeamTyeDonnellyComponent } from './longboards-team-tye-donnelly.component';

describe('LongboardsTeamTyeDonnellyComponent', () => {
  let component: LongboardsTeamTyeDonnellyComponent;
  let fixture: ComponentFixture<LongboardsTeamTyeDonnellyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongboardsTeamTyeDonnellyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongboardsTeamTyeDonnellyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
