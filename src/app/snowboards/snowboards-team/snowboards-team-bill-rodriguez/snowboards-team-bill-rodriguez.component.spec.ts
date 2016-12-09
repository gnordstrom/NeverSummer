/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsTeamBillRodriguezComponent } from './snowboards-team-bill-rodriguez.component';

describe('SnowboardsTeamBillRodriguezComponent', () => {
  let component: SnowboardsTeamBillRodriguezComponent;
  let fixture: ComponentFixture<SnowboardsTeamBillRodriguezComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsTeamBillRodriguezComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsTeamBillRodriguezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
