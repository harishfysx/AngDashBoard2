import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ResultService} from '../../shared/services/result.service';
import {AppError} from '../../shared/errors/app.error';
import {NotFoundError} from '../../shared/errors/not.found.error';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  studentFound = false;
  message;
  student: any;
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

  constructor(private resultService: ResultService) { }

  ngOnInit() {
  }
  onSubmit(f: NgForm) {
    // console.log(f.value.ticket);  // { first: '', last: '' }
    // console.log(f.valid);  // false
    this.studentFound = !this.studentFound;
    this.message = 'result';
    this.resultService.getStudent(f.value.ticket).subscribe((resp: any) => {
      if (resp.json() != null) {
        this.student = resp.json();
        this.message = 'result';
        // console.log(this.student);
      }else {
        this.message = 'notFound';
      }
      },
      (error: AppError) => {
        if (error instanceof  NotFoundError) {
          console.log('its not found error');
        }else {
          throw error ;
        }
    });
  }
  // getClasses
  getColor(outome) {
    if (outome === 'FAIL') {
      return '#e24d4d';
    }
    return '#64B5F6';
  }

}