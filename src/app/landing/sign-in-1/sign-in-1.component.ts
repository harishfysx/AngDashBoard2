import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators, FormControl, NgForm} from '@angular/forms';
import {AuthService} from '../../shared/services/auth.service';
import {CognitoUserSession} from 'amazon-cognito-identity-js';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in-1.component.html',
  styleUrls: ['./sign-in-1.component.scss']
})
export class PageSignInComponent implements OnInit {
  constructor(private router: Router, private  authService: AuthService) {}

  ngOnInit() { }

  onSubmit(f: NgForm) {
    const email = f.value.email;
    const password = f.value.password;
    // console.log(email, password);
     this.authService.signIn(email, password).subscribe((value: CognitoUserSession) => {
       this.router.navigate(['/members']);
     },  (error) => {
       console.log(error);
    });

  }
}
