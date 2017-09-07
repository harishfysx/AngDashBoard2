import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeAnalyticsComponent } from './college-analytics.component';

describe('CollegeAnalyticsComponent', () => {
  let component: CollegeAnalyticsComponent;
  let fixture: ComponentFixture<CollegeAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
