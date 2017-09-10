import {Component, OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
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
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  myData: Array < any > ;
  dataSource: MyDataSource;

  constructor(private http: Http, private resultService: ResultService) {
    this.getData();
  }
  public getData() {
    this.resultService.getSampleElements()
      .map(response => response.json())
      .subscribe(res => {
        this.myData = res;
        this.dataSource = new MyDataSource(this.myData);
      });
  }
  ngOnInit() {
  }
}

export interface Data {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
export class MyDataSource extends DataSource<any> {
  constructor(private data: Data[]) {
    super();
  }
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Data[]> {
    return Observable.of(this.data);
  }

  disconnect() {}

}
