import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {CognitoUser} from 'amazon-cognito-identity-js';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class PageConfirmComponent implements OnInit, OnDestroy {
  confirmSubScription;
  registeredUserEmail;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.registeredUserEmail = this.route.snapshot.paramMap.get('registeredUserEmail');
    /*// We can use following method if we stay on sampe page and load next page
    // But since we are navigating away from the page we should use activated snapshot
    // Refer Udemy- Mosh Hamedani, Angular - Why Route Parameters are observables
    this.confirmSubScription = this.route.paramMap.subscribe( (params) => {
      this.registeredUserEmail = params.get('registeredUserEmail');
    });*/
  }

  ngOnDestroy(): void {
    /*
    // Needed if we subscribe to route parameters
    this.confirmSubScription.unsubscribe();
    */
  }
}
