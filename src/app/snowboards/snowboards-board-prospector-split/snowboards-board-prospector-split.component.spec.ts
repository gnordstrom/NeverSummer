/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsBoardProspectorSplitComponent } from './snowboards-board-prospector-split.component';

describe('SnowboardsBoardProspectorSplitComponent', () => {
  let component: SnowboardsBoardProspectorSplitComponent;
  let fixture: ComponentFixture<SnowboardsBoardProspectorSplitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsBoardProspectorSplitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsBoardProspectorSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
