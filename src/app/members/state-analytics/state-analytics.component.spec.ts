import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateAnalyticsComponent } from './state-analytics.component';

describe('StateAnalyticsComponent', () => {
  let component: StateAnalyticsComponent;
  let fixture: ComponentFixture<StateAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
