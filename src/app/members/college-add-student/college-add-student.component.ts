import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared-service';
import {NgForm} from '@angular/forms';
import {AppError} from '../../shared/errors/app.error';
import {NotFoundError} from '../../shared/errors/not.found.error';
import {ResultService} from '../../shared/services/result.service';
import {MdDialog} from '@angular/material';
import {SmsComponent} from '../sms/sms.component';
import {RefDataService} from '../../shared/services/ref-data.service';

const breadcrumb: any[] = [
  {
    title: 'State',
    link: '/members/state-search'
  },
  {
    title: 'Search',
    link: '/members/state-search'
  }
];


@Component({
  selector: 'app-college-add-student',
  templateUrl: './college-add-student.component.html',
  styleUrls: ['./college-add-student.component.scss']
})
export class CollegeAddStudentComponent implements OnInit {
  pageTitle = 'IRAAT';
  breadcrumb: any[] = breadcrumb;
  studentFound = false;
  message;
  student: any;
  resultLoading = false;
  years;
  states;
  categories;
  studyYears;
  exams;
  constructor( private _sharedService: SharedService,
               private resultService: ResultService,
               private refDataService: RefDataService,
               private dialog: MdDialog) {
    this._sharedService.emitChange(this.pageTitle);
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
    // console.log(f.value.ticket);  // { first: '', last: '' }
    // console.log(f.valid);  // false
    this.studentFound = !this.studentFound;
    this.resultLoading = true;
    // this.message = 'result';
    this.resultService.getStudent(f.value.ticket).subscribe((resp: any) => {
        if (resp.json() != null) {
          this.student = resp.json();
          this.message = 'result';
          this.resultLoading = false;
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
  // open sms dialogue
  openSmsDialogue() {
    this.dialog.open(SmsComponent);
  }
  // getClasses
  getColor(outome) {
    if (outome === 'FAIL') {
      return '#e24d4d';
    }
    return '#64B5F6';
  }

}
