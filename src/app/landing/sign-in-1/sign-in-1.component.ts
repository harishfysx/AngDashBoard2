import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { NgForm} from '@angular/forms';
import {AuthService} from '../../shared/services/auth.service';
import {CognitoUserSession} from 'amazon-cognito-identity-js';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in-1.component.html',
  styleUrls: ['./sign-in-1.component.scss']
})
export class PageSignInComponent implements OnInit {
  loginSubscription: Subscription; // SignIn subscription,
  invalidLogin = false; // Boolean to show error on UI
  invalidMessage: string; // String to show error message on UI
  constructor(private router: Router, private  authService: AuthService) {}

  ngOnInit() { }

  onSubmit(f: NgForm) {
    this.invalidLogin = false;
    this.invalidMessage = '';
    const email = f.value.email;
    const password = f.value.password;
    this.loginSubscription = this.authService.signIn(email, password).subscribe((value: CognitoUserSession) => {
       this.router.navigate(['/members']);
     },  (error) => {
       this.invalidLogin = true;
       this.invalidMessage = error.message;
    });
  }
}
