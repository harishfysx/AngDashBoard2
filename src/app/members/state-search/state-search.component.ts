import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared-service';
import {NgForm} from '@angular/forms';
import {AppError} from '../../shared/errors/app.error';
import {NotFoundError} from '../../shared/errors/not.found.error';
import {ResultService} from '../../shared/services/result.service';
import {MdDialog} from '@angular/material';
import {SmsComponent} from '../sms/sms.component';

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
  years = [
    {value: '2017', viewValue: '2017'},
    {value: '2016', viewValue: '2016'},
    {value: '2015', viewValue: '2015'}
  ];
  states = [
    {value: 'ts', viewValue: 'Telangana'},
    {value: 'ap', viewValue: 'Andhra Pradesh'}
  ];
  categories = [
    {value: 'gen', viewValue: 'General'},
    {value: 'voc', viewValue: 'Vocational'}
  ];
  studyYears = [
    {value: 'I', viewValue: 'I-Year'},
    {value: 'II', viewValue: 'II-Year'}
  ];
  exams = [
    {value: 'r', viewValue: 'Regular'},
    {value: 's', viewValue: 'Supplementary'}
  ];

  constructor( private _sharedService: SharedService,
               private resultService: ResultService,
               private dialog: MdDialog) {
    this._sharedService.emitChange(this.pageTitle);
  }
  ngOnInit() {
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
