import { Component, OnInit } from '@angular/core';
const breadcrumb: any[] = [
  {
    title: 'College',
    link: '/members/college-search'
  },
  {
    title: 'Collections',
    link: '/members/college-collections'
  }
];
@Component({
  selector: 'app-college-collections',
  templateUrl: './college-collections.component.html',
  styleUrls: ['./college-collections.component.scss']
})
export class CollegeCollectionsComponent implements OnInit {
  breadcrumb: any[] = breadcrumb;
  constructor() { }

  ngOnInit() {
  }

}
