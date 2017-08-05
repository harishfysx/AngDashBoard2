import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateSearchComponent } from './state-search.component';

describe('StateSearchComponent', () => {
  let component: StateSearchComponent;
  let fixture: ComponentFixture<StateSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
