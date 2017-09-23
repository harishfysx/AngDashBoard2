import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CollectionsService} from '../../shared/services/collections.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-college-view-collection',
  templateUrl: './college-view-collection.component.html',
  styleUrls: ['./college-view-collection.component.scss']
})
export class CollegeViewCollectionComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute,
              private collectionService: CollectionsService) { }

  ngOnInit() {
    console.log('Initing');
   this.route.paramMap
     .subscribe(params => {
       console.log(params);
       this.collectionService.getStudentsInCollection(params.get('className'), 'stdntname', 'asc')
         .subscribe((response) => {
            console.log(response);
         });
     });
  }
  ngOnDestroy(): void {
    console.log('destroying college-view');
  }
}
