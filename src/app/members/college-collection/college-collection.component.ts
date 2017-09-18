import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';
import {CollectionModel} from '../../shared/models/collection.model';
import {CollectionsService} from '../../shared/services/collections.service';

@Component({
  selector: 'app-college-collection',
  templateUrl: './college-collection.component.html',
  styleUrls: ['./college-collection.component.scss']
})
export class CollegeCollectionComponent implements OnInit {
  currentUser;
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


  constructor(private authService: AuthService,
              private collectionService: CollectionsService,
              private router: Router) {
   this.currentUser  = this.authService.getAuthenticatedUser().getUsername();
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    const collection = new CollectionModel();
    const formValue = f.value;
    collection.userName = this.currentUser;
    collection.className = formValue.className;
    collection.year = formValue.year;
    collection.state = formValue.state;
    collection.studyYear = formValue.studyYear;
    collection.exam = formValue.exam;
    this.collectionService.saveCollection(collection)
     .subscribe(response => {
      console.log(response);
    });
  }

}
