/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsBoardProtoTypeTwoComponent } from './snowboards-board-proto-type-two.component';

describe('SnowboardsBoardProtoTypeTwoComponent', () => {
  let component: SnowboardsBoardProtoTypeTwoComponent;
  let fixture: ComponentFixture<SnowboardsBoardProtoTypeTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsBoardProtoTypeTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsBoardProtoTypeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
