/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LongboardsTechComponent } from './longboards-tech.component';

describe('LongboardsTechComponent', () => {
  let component: LongboardsTechComponent;
  let fixture: ComponentFixture<LongboardsTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongboardsTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongboardsTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
