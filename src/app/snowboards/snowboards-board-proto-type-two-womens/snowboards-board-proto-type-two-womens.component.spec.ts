/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowboardsBoardProtoTypeTwoWomensComponent } from './snowboards-board-proto-type-two-womens.component';

describe('SnowboardsBoardProtoTypeTwoWomensComponent', () => {
  let component: SnowboardsBoardProtoTypeTwoWomensComponent;
  let fixture: ComponentFixture<SnowboardsBoardProtoTypeTwoWomensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardsBoardProtoTypeTwoWomensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardsBoardProtoTypeTwoWomensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
