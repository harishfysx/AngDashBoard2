import {Component, OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {ResultService} from '../../shared/services/result.service';

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
  displayedColumns = ['ticket', 'stdntname', 'grandtotal', 'grandresult'];
  myData: Array < any > ;
  dataSource: SampleStudentsDataSource;

  constructor(private resultService: ResultService) {
    this.getData();
  }
  public getData() {
    this.resultService.getSampleStudents()
      .subscribe(res => {
        this.myData = res;
        this.dataSource = new SampleStudentsDataSource(this.myData);
      });
  }
  ngOnInit() {
  }
}


export interface Student {
  ticket: number;
  stdntname: string;
  grandtotal: string;
  grandresult: string;
}

export class SampleStudentsDataSource extends DataSource<any> {
  constructor(private data: Student[]) {
    super();
  }
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Student[]> {
    return Observable.of(this.data);
  }
  disconnect() {}
}
