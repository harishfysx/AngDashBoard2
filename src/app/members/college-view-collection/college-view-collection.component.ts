import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CollectionsService} from '../../shared/services/collections.service';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import {DatatableComponent} from '@swimlane/ngx-datatable';
// Define constants
const breadcrumb: any[] = [
  {
    title: 'College',
    link: '/members/college-search'
  },
  {
    title: 'Classes',
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
  collectionName = '';
  studentsLoading = false;
  rows = [];
  temp = [];
  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(private route: ActivatedRoute,
              private collectionService: CollectionsService) { }

  ngOnInit() {
    this.studentsLoading = true;
    this.route.paramMap
      .subscribe(params => {
        const colName = params.get('className');
        this.collectionName = colName;
        const breadCrumbObj =  {title: colName };
        this.breadcrumb.splice(2, 1, breadCrumbObj);
        this.fetch((data) => {
          this.temp = [...data]; // cache our list
          this.rows = data; // push our inital complete list
          this.studentsLoading = false;
          }, colName);
      });
  }
  fetch(cb, className) {
    this.collectionService.getStudentsInCollection(className, 'stdntname', 'asc').subscribe((res) => {
      console.log(res);
      cb(res);
    });
  }
  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function(d) {  // filter our data
      return d.stdntname.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp; // update the rows
    this.table.offset = 0; // Whenever the filter changes, always go back to the first page
  }
  ngOnDestroy(): void {
    console.log('destroying college-view');
  }
}



