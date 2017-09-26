import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataSource, SelectionModel} from '@angular/cdk/collections';
import {CollectionsService} from '../../shared/services/collections.service';
import {MatPaginator, MatSort} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
// Define constants
const breadcrumb: any[] = [
  {
    title: 'College',
    link: '/members/college-search'
  },
  {
    title: 'Collections',
    link: '/members/college-collections'
  },
];
@Component({
  selector: 'app-college-view-collection',
  templateUrl: './college-view-collection.component.html',
  styleUrls: ['./college-view-collection.component.scss']
})
export class CollegeViewCollectionComponent implements OnInit, OnDestroy {
  breadcrumb: any[] = breadcrumb;
  displayedColumns = ['ticket', 'stdntname', 'grandtotal', 'grandresult', 'select'];
  exampleDatabase = new ExampleDatabase(this.collectionService, this.route);
  selection = new SelectionModel<string>(true, []);
  dataSource: ExampleDataSource | null;
  collectionName = '';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filter') filter: ElementRef;

  constructor(private route: ActivatedRoute,
              private collectionService: CollectionsService) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        const colName = params.get('className');
        this.collectionName = colName;
        const breadCrumbObj =  {title: colName };
        this.breadcrumb.splice(2, 1, breadCrumbObj);
      });
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) { return; }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }
  // testFire
  testFire(row) {
    console.log(row);
  }
  isAllSelected(): boolean {
    if (!this.dataSource) { return false; }
    if (this.selection.isEmpty()) { return false; }

    if (this.filter.nativeElement.value) {
      return this.selection.selected.length === this.dataSource.renderedData.length;
    } else {
      return this.selection.selected.length === this.exampleDatabase.data.length;
    }
  }

  masterToggle() {
    if (!this.dataSource) { return; }

    if (this.isAllSelected()) {
      this.selection.clear();
    } else if (this.filter.nativeElement.value) {
      this.dataSource.renderedData.forEach(data => this.selection.select(data.ticket));
    } else {
      this.exampleDatabase.data.forEach(data => this.selection.select(data.ticket));
    }
  }
  ngOnDestroy(): void {
    console.log('destroying college-view');
  }
}


export interface ColStudent {
  className: string;
  ticket: string;
  userName: string;
  stdntname: string;
  colTicketID: string;
  grandtotal: string;
  grandresult: string;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<ColStudent[]> = new BehaviorSubject<ColStudent[]>([]);
  get data(): ColStudent[] {
    return this.dataChange.value;
  }

  constructor(private collectionService: CollectionsService, private route: ActivatedRoute) {
    this.route.paramMap
      .subscribe(params => {
        this.collectionService.getStudentsInCollection(params.get('className'), 'stdntname', 'asc')
          .subscribe((response) => {
            this.dataChange.next(response);
          });
      });
  }
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<any> {
  _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }

  filteredData: ColStudent[] = [];
  renderedData: ColStudent[] = [];

  constructor(private _exampleDatabase: ExampleDatabase,
              private _paginator: MatPaginator,
              private _sort: MatSort) {
    super();

    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<ColStudent[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._sort._matSortChange,
      this._filterChange,
      this._paginator.page,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      // Filter data
      this.filteredData = this._exampleDatabase.data.slice().filter((item: ColStudent) => {
        const searchStr = (item.ticket + item.stdntname + item.grandtotal + item.grandresult).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
      });

      // Sort filtered data
      const sortedData = this.sortData(this.filteredData.slice());

      // Grab the page's slice of the filtered sorted data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);
      return this.renderedData;
    });
  }

  disconnect() {}

  /** Returns a sorted copy of the database data. */
  sortData(data: ColStudent[]): ColStudent[] {
    if (!this._sort.active || this._sort.direction === '') { return data; }

    return data.sort((a, b) => {
      let propertyA: number|string = '';
      let propertyB: number|string = '';

      switch (this._sort.active) {
        case 'ticket': [propertyA, propertyB] = [a.ticket, b.ticket]; break;
        case 'stdntname': [propertyA, propertyB] = [a.stdntname, b.stdntname]; break;
        case 'grandtotal': [propertyA, propertyB] = [a.grandtotal, b.grandtotal]; break;
        case 'grandresult': [propertyA, propertyB] = [a.grandresult, b.grandresult]; break;
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }
}
