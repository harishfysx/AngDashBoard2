import {Component, Inject} from '@angular/core';
import {MD_DIALOG_DATA, MatDialogRef, MatSelect} from '@angular/material';
import {CollectionModel} from '../../shared/models/collection.model';
import {MockUpService} from '../../shared/demos/mockup.service';

@Component({
  selector: 'app-college-add-source',
  templateUrl: './college-add-source.component.html',
  styleUrls: ['./college-add-source.component.scss']
})
export class CollegeAddSourceComponent {
  collections: CollectionModel[] = [];
  constructor(
    private mockUpService: MockUpService,
    public dialogRef: MatDialogRef<CollegeAddSourceComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) {
    this.mockUpService.getSampleCollections().subscribe((response) => {
      console.log(response);
      this.collections = response;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
