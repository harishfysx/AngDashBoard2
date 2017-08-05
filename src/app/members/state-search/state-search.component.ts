import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared-service';


@Component({
  selector: 'app-state-search',
  templateUrl: './state-search.component.html',
  styleUrls: ['./state-search.component.scss']
})
export class StateSearchComponent implements OnInit {


  pageTitle: string = 'IRAAT';

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit(): void {
  }

}
