import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeAddSourceComponent } from './college-add-source.component';

describe('CollegeAddSourceComponent', () => {
  let component: CollegeAddSourceComponent;
  let fixture: ComponentFixture<CollegeAddSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeAddSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeAddSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
