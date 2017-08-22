import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  studentFound = false;
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

  constructor() { }

  ngOnInit() {
  }
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    this.studentFound = !this.studentFound;
  }
}
