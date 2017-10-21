import {Component, Inject, Input} from '@angular/core';
import {MD_DIALOG_DATA, MatDialogRef, MatSelect} from '@angular/material';
import {CollectionModel} from '../../shared/models/collection.model';
import {MockUpService} from '../../shared/demos/mockup.service';
import _ from 'lodash';

@Component({
  selector: 'app-college-add-source',
  templateUrl: './college-add-source.component.html',
  styleUrls: ['./college-add-source.component.scss']
})
export class CollegeAddSourceComponent {
  collections: CollectionModel[] = [];
  showWarning = false;
  constructor(
    private mockUpService: MockUpService,
    public dialogRef: MatDialogRef<CollegeAddSourceComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) {
    this.mockUpService.getSampleCollections().subscribe((response) => {
        if (response !== null && response !== undefined) {
          this.collections = response;
        }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  validateClass() {
    const classTobeAdded = this.data.className;
    this.showWarning = false;
    if (this.data.classSet.has(classTobeAdded)) {
      this.showWarning = true;
    } else {
      this.dialogRef.close(this.data.className);
    }
  }

}
