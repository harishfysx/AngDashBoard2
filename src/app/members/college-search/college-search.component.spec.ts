import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeSearchComponent } from './college-search.component';

describe('CollegeSearchComponent', () => {
  let component: CollegeSearchComponent;
  let fixture: ComponentFixture<CollegeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
