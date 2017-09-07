import { Component, OnInit } from '@angular/core';
const breadcrumb: any[] = [
  {
    title: 'College',
    link: '/members/college-search'
  },
  {
    title: 'Analytics',
    link: '/members/college-analytics'
  }
];
@Component({
  selector: 'app-college-analytics',
  templateUrl: './college-analytics.component.html',
  styleUrls: ['./college-analytics.component.scss']
})
export class CollegeAnalyticsComponent implements OnInit {
  breadcrumb: any[] = breadcrumb;
  constructor() { }

  ngOnInit() {
  }

}
