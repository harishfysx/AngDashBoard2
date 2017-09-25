import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../shared-service';
import {NgForm} from '@angular/forms';
import {AppError} from '../../shared/errors/app.error';
import {NotFoundError} from '../../shared/errors/not.found.error';
import {ResultService} from '../../shared/services/result.service';
import {MdDialog} from '@angular/material';
import {SmsComponent} from '../sms/sms.component';
import {TicketQueryModel} from '../../shared/models/ticketQuery.model';
import {ActivatedRoute} from '@angular/router';
import {CollectionsService} from '../../shared/services/collections.service';
import {CollectionModel} from '../../shared/models/collection.model';

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
  selector: 'app-college-add-student',
  templateUrl: './college-add-student.component.html',
  styleUrls: ['./college-add-student.component.scss']
})
export class CollegeAddStudentComponent implements OnInit {
  pageTitle = 'IRAAT';
  breadcrumb: any[] = breadcrumb;
  studentFound = false;
  message;
  student: any;
  resultLoading = false;
  collection$: any;
  collection: CollectionModel;

  constructor( private _sharedService: SharedService,
               private resultService: ResultService,
               private collectionService: CollectionsService,
               private route: ActivatedRoute,
               private dialog: MdDialog) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        const colName = params.get('className');
        const breadCrumbObj2 =  {title: colName, link: '/members/college-collections/' + colName };
        const breadCrumbObj3 =  {title: 'Add Student' };
        this.breadcrumb.splice(2, 2, breadCrumbObj2, breadCrumbObj3);
        this.collection$ = this.collectionService.getCollectionDetails(colName);
        this.collection$.subscribe((resp) => {
          this.collection = resp;
        });
      });
  }
  onSubmit(f: NgForm) {
    const formValue = f.value;
    const queryObj = new TicketQueryModel();
    queryObj.year = this.collection.year;
    queryObj.state = this.collection.state;
    queryObj.category = this.collection.category;
    queryObj.exam = this.collection.exam;
    queryObj.studyYear = this.collection.studyYear;
    queryObj.ticket = formValue.ticket;
    this.studentFound = !this.studentFound;
    this.resultLoading = true;
    this.resultService.getStudentUnsecured(queryObj).subscribe((resp: any) => {
        if (resp.json() != null) {
          this.student = resp.json();
          this.message = 'result';
          this.resultLoading = false;
        }else {
          this.resultLoading = false;
          this.message = 'notFound';
        }
      },
      (error: AppError) => {
        if (error instanceof  NotFoundError) {
          console.log('its not found error');
          this.resultLoading = false;
        }else {
          this.resultLoading = false;
          this.message = 'somethingWrong';
          throw error ;
        }
      });
    this.resultLoading = false;
  }
  // open sms dialogue
  openSmsDialogue() {
    this.dialog.open(SmsComponent);
  }
  // getClasses
  getColor(outome) {
    if (outome === 'FAIL') {
      return '#e24d4d';
    }
    return '#64B5F6';
  }

}
