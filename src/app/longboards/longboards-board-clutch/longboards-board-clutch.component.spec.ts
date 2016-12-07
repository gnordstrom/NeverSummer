/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LongboardsBoardClutchComponent } from './longboards-board-clutch.component';

describe('LongboardsBoardClutchComponent', () => {
  let component: LongboardsBoardClutchComponent;
  let fixture: ComponentFixture<LongboardsBoardClutchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongboardsBoardClutchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongboardsBoardClutchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
