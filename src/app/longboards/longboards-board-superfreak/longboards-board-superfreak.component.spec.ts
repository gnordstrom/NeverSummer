/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LongboardsBoardSuperfreakComponent } from './longboards-board-superfreak.component';

describe('LongboardsBoardSuperfreakComponent', () => {
  let component: LongboardsBoardSuperfreakComponent;
  let fixture: ComponentFixture<LongboardsBoardSuperfreakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongboardsBoardSuperfreakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongboardsBoardSuperfreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
