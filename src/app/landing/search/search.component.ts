import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ResultService} from '../../shared/services/result.service';
import {AppError} from '../../shared/errors/app.error';
import {NotFoundError} from '../../shared/errors/not.found.error';
import {RefDataService} from '../../shared/services/ref-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  studentFound = false;
  message;
  student: any;
  resultLoading = false;
  years;
  states;
  categories;
  studyYears;
  exams;

  constructor(private resultService: ResultService,
              private refDataService: RefDataService) {
  }

  ngOnInit() {
    // Years
    this.refDataService.getYears().subscribe((value) => {
      this.years = value;
    });
    // States
    this.refDataService.getStates().subscribe((value) => {
      this.states = value;
    });
    // Exams
    this.refDataService.getExams().subscribe((value) => {
      this.exams = value;
    });
    // Categories
    this.refDataService.getCategories().subscribe((value) => {
      this.categories = value;
    });
    // Study Years
    this.refDataService.getStudyYears().subscribe((value) => {
      this.studyYears = value;
    });
  }
  onSubmit(f: NgForm) {
    this.studentFound = !this.studentFound;
    this.resultLoading = true;
    this.resultService.getStudent(f.value.ticket).subscribe((resp: any) => {
      if (resp.json() != null) {
        this.student = resp.json();
        this.message = 'result';
      }else {
        this.resultLoading = false;
        this.message = 'notFound';
      }
      },
      (error: AppError) => {
        if (error instanceof  NotFoundError) {
          console.log('its not found error');
          this.resultLoading = false;
        }else {
          throw error ;
        }
    });
    this.resultLoading = false;
  }
  // getClasses
  getColor(outome) {
    if (outome === 'FAIL') {
      return '#e24d4d';
    }
    return '#64B5F6';
  }

}
