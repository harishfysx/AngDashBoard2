import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeViewCollectionComponent } from './college-view-collection.component';

describe('CollegeViewCollectionComponent', () => {
  let component: CollegeViewCollectionComponent;
  let fixture: ComponentFixture<CollegeViewCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeViewCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeViewCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
