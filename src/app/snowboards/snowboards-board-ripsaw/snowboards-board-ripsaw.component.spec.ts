/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsBoardRipsawComponent } from './snowboards-board-ripsaw.component';

describe('SnowboardsBoardRipsawComponent', () => {
  let component: SnowboardsBoardRipsawComponent;
  let fixture: ComponentFixture<SnowboardsBoardRipsawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsBoardRipsawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsBoardRipsawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
