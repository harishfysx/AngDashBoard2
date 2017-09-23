import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeAddStudentComponent } from './college-add-student.component';

describe('CollegeAddStudentComponent', () => {
  let component: CollegeAddStudentComponent;
  let fixture: ComponentFixture<CollegeAddStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeAddStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeAddStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
