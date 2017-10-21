import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import {CollectionModel} from '../../shared/models/collection.model';
import {CollectionsService} from '../../shared/services/collections.service';
import {MockUpService} from '../../shared/demos/mockup.service';

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
  classNames = new Set();
  className;
  showWarning = false;
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
   this.classNames.delete(cls);
  }

  openDialogue() {
    const dialogRef = this.dialog.open(CollegeAddSourceComponent, {height: '400px',
      width: '600px', data: {className: this.className, classSet: this.classNames }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== null && result !== undefined) {
        this.classNames.add(result);
      }
    });
    //
    dialogRef.beforeClose().subscribe((result) => {
      // console.log('result before closing', result);
    });
  }
}



