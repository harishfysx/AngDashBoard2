import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import {CollectionModel} from '../../shared/models/collection.model';
import {CollectionsService} from '../../shared/services/collections.service';
import {MockUpService} from '../../shared/demos/mockup.service';
import _ from 'lodash';
import {MatDialog} from '@angular/material';
import {CollegeAddSourceComponent} from '../college-add-source/college-add-source.component';

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
  classNames = [];
  className;
  // collection: CollectionModel;
  name = 'harish';
  animal: string;
  constructor(private collectionService: CollectionsService,
              public dialog: MatDialog,
              private mockUpService: MockUpService) {}
  ngOnInit(): void {
    /*this.collectionService.getCollections().subscribe((response) => {
      this.collections = response;
    });
    this.mockUpService.getSampleCollections().subscribe((response) => {
      console.log(response);
      this.collections = response;
    });
    // console.log(this.collections);
    */
  }
  //
  deleteCollection(cls) {
    _.pull(this.classNames, cls);
  }

  openDialogue() {
    const dialogRef = this.dialog.open(CollegeAddSourceComponent, {height: '400px',
      width: '600px', data: { name: this.name, className: this.className }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // this.collection = result;
      this.classNames.push(result);
    });
  }
}



