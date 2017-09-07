import { Component, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit() {
  }

}
