import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeCollectionsComponent } from './college-collections.component';

describe('CollegeCollectionsComponent', () => {
  let component: CollegeCollectionsComponent;
  let fixture: ComponentFixture<CollegeCollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeCollectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
