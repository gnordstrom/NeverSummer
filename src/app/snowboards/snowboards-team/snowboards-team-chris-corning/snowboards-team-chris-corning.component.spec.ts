/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsTeamChrisCorningComponent } from './snowboards-team-chris-corning.component';

describe('SnowboardsTeamChrisCorningComponent', () => {
  let component: SnowboardsTeamChrisCorningComponent;
  let fixture: ComponentFixture<SnowboardsTeamChrisCorningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsTeamChrisCorningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsTeamChrisCorningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
