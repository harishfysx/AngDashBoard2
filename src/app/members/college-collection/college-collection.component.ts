import { Component, OnInit } from '@angular/core';
import {NgForm, FormControl, Validators} from '@angular/forms';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';
import {CollectionModel} from '../../shared/models/collection.model';
import {CollectionsService} from '../../shared/services/collections.service';
import {RefDataService} from '../../shared/services/ref-data.service';
import 'rxjs/add/operator/first';
import { MatSnackBar } from '@angular/material';
import _ from 'lodash';

const breadcrumb: any[] = [
  {
    title: 'College',
    link: '/members/college-search'
  },
  {
    title: 'Collections',
    link: '/members/college-collections'
  },
  {
    title: 'New Collection'
  }
];

@Component({
  selector: 'app-college-collection',
  templateUrl: './college-collection.component.html',
  styleUrls: ['./college-collection.component.scss']
})


export class CollegeCollectionComponent implements OnInit {
  breadcrumb: any[] = breadcrumb;
  addCollectionProcessing = 'determinate';
  currentUser;
  showError = false;
  errorMessage = '';
  years;
  states;
  categories;
  studyYears;
  exams;
  constructor(private authService: AuthService,
              private collectionService: CollectionsService,
              private refDataService: RefDataService,
              private router: Router,
              public snackBar: MatSnackBar) {
    this.currentUser  = this.authService.getAuthenticatedUser().getUsername();
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
    this.addCollectionProcessing = 'indeterminate';
    this.showError = false;
    const collection = new CollectionModel();
    const formValue = f.value;
    collection.className = formValue.className;
    collection.year = formValue.year;
    collection.state = formValue.state;
    collection.studyYear = formValue.studyYear;
    collection.exam = formValue.exam;
    collection.category = formValue.category;
    this.collectionService.saveCollection(collection)
      .first()
      .subscribe(response => {
                  if (_.isEmpty(response)) {
                    this.router.navigate(['members/college-collections']);
                    this.addCollectionProcessing = 'determinate';
                    this.showError = false;
                  }else {
                    this.showError = true;
                    this.addCollectionProcessing = 'determinate';
                      if (response.errorMessage === 'The conditional request failed' ) {
                        this.errorMessage = 'Class Name already exists';
                      } else {
                        this.errorMessage = response.errorMessage;
                      }
                  }
      });
  }

  //
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000, verticalPosition: 'bottom',
      horizontalPosition: 'right',
    });
  }
}
