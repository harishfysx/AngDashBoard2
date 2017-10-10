import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {DatatableComponent} from '@swimlane/ngx-datatable';
import {CollectionsService} from '../../shared/services/collections.service';
import {Subscription} from 'rxjs/Subscription';
const breadcrumb: any[] = [
  {
    title: 'College',
    link: '/members/college-search'
  },
  {
    title: 'Collections'
  }
];
@Component({
  selector: 'app-college-collections',
  templateUrl: './college-collections.component.html',
  styleUrls: ['./college-collections.component.scss']
})
export class CollegeCollectionsComponent implements OnInit, OnDestroy {
  breadcrumb: any[] = breadcrumb;
  collectionsLoading = false;
  collectionService$: Subscription;
  rows = [];
  temp = [];

  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(private collectionService: CollectionsService) {}

  ngOnInit(): void {
    this.collectionsLoading = true;
    this.fetch((data) => {
      this.temp = [...data]; // cache our list
      this.rows = data; // push our inital complete list
      this.collectionsLoading = false;
    });
  }
  fetch(cb) {
    this.collectionService$ = this.collectionService.getCollections().subscribe((res) => {
      cb(res);
    });
  }
  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function(d) {  // filter our data
      return d.className.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp; // update the rows
    this.table.offset = 0; // Whenever the filter changes, always go back to the first page
  }
  ngOnDestroy(): void {
    this.collectionService$.unsubscribe();
  }
}




