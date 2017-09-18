import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeCollectionComponent } from './college-collection.component';

describe('CollegeCollectionComponent', () => {
  let component: CollegeCollectionComponent;
  let fixture: ComponentFixture<CollegeCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
