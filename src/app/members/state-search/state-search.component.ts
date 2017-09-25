import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared-service';
import {NgForm} from '@angular/forms';
import {AppError} from '../../shared/errors/app.error';
import {NotFoundError} from '../../shared/errors/not.found.error';
import {ResultService} from '../../shared/services/result.service';
import {MdDialog} from '@angular/material';
import {SmsComponent} from '../sms/sms.component';
import {RefDataService} from '../../shared/services/ref-data.service';
import {TicketQueryModel} from '../../shared/models/ticketQuery.model';

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
  selector: 'app-state-search',
  templateUrl: './state-search.component.html',
  styleUrls: ['./state-search.component.scss']
})
export class StateSearchComponent implements OnInit {
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
    const formValue = f.value;
    const queryObj = new TicketQueryModel();
    queryObj.year = formValue.year;
    queryObj.state = formValue.state;
    queryObj.category = formValue.category;
    queryObj.exam = formValue.exam;
    queryObj.studyYear = formValue.studyYear;
    queryObj.ticket = formValue.ticket;
    this.studentFound = !this.studentFound;
    this.resultLoading = true;
     this.resultService.getStudentUnsecured(queryObj).subscribe((resp: any) => {
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
