import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Twit2Component } from './twit2.component';

describe('Twit2Component', () => {
  let component: Twit2Component;
  let fixture: ComponentFixture<Twit2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Twit2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Twit2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
