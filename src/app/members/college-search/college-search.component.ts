import {Component, OnInit, ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {MatPaginator, MatSort} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import {ResultService} from '../../shared/services/result.service';
const breadcrumb: any[] = [
  {
    title: 'College',
    link: '/members/college-search'
  },
  {
    title: 'Search',
    link: '/members/college-search'
  }
];

@Component({
  selector: 'app-college-search',
  templateUrl: './college-search.component.html',
  styleUrls: ['./college-search.component.scss']
})
export class CollegeSearchComponent implements OnInit {
  breadcrumb: any[] = breadcrumb;
  constructor(private resultService: ResultService) {}
  ngOnInit() {
  }
}



