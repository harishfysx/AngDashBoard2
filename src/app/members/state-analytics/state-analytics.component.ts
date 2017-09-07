import { Component, OnInit } from '@angular/core';
const breadcrumb: any[] = [
  {
    title: 'State',
    link: '/members/state-search'
  },
  {
    title: 'Analytics',
    link: '/members/state-analytics'
  }
];

@Component({
  selector: 'app-state-analytics',
  templateUrl: './state-analytics.component.html',
  styleUrls: ['./state-analytics.component.scss']
})
export class StateAnalyticsComponent implements OnInit {
  breadcrumb: any[] = breadcrumb;
  constructor() { }

  ngOnInit() {
  }

}
