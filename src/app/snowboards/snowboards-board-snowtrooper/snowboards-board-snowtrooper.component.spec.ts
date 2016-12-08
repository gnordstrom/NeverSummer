/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsBoardSnowtrooperComponent } from './snowboards-board-snowtrooper.component';

describe('SnowboardsBoardSnowtrooperComponent', () => {
  let component: SnowboardsBoardSnowtrooperComponent;
  let fixture: ComponentFixture<SnowboardsBoardSnowtrooperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsBoardSnowtrooperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsBoardSnowtrooperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
