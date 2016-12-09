/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsTeamDevinWhiteleyComponent } from './snowboards-team-devin-whiteley.component';

describe('SnowboardsTeamDevinWhiteleyComponent', () => {
  let component: SnowboardsTeamDevinWhiteleyComponent;
  let fixture: ComponentFixture<SnowboardsTeamDevinWhiteleyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsTeamDevinWhiteleyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsTeamDevinWhiteleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
