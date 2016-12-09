/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LongboardsTeamZachBaileyComponent } from './longboards-team-zach-bailey.component';

describe('LongboardsTeamZachBaileyComponent', () => {
  let component: LongboardsTeamZachBaileyComponent;
  let fixture: ComponentFixture<LongboardsTeamZachBaileyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongboardsTeamZachBaileyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongboardsTeamZachBaileyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
