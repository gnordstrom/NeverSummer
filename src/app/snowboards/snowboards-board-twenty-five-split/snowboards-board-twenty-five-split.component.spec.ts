/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsBoardTwentyFiveSplitComponent } from './snowboards-board-twenty-five-split.component';

describe('SnowboardsBoardTwentyFiveSplitComponent', () => {
  let component: SnowboardsBoardTwentyFiveSplitComponent;
  let fixture: ComponentFixture<SnowboardsBoardTwentyFiveSplitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsBoardTwentyFiveSplitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsBoardTwentyFiveSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
