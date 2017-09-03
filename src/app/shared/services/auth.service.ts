import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {CognitoUser, CognitoUserAttribute, CognitoUserPool} from 'amazon-cognito-identity-js';
import { User } from './user.model';
import { UserPoolId } from '../../../../config/config';
import { ClientId } from '../../../../config/config';
import {observable} from 'rxjs/symbol/observable';
import {Observer} from 'rxjs/Observer';
const poolData = {
  UserPoolId : UserPoolId, // Your user pool id here
  ClientId : ClientId // Your client id here
};

const userPool = new CognitoUserPool(poolData);

@Injectable()
export class AuthService {
  authIsLoading = new BehaviorSubject<boolean>(false);
  authDidFail = new BehaviorSubject<boolean>(false);
  authStatusChanged = new Subject<boolean>();
  registeredUser: CognitoUser;
  constructor(private router: Router) {}
  // signUp Observable
  signObs = (username: string, email: string, password: string) => {
    return Observable.create(observer => {
      this.authIsLoading.next(true);
      const user: User = {
        username: username,
        email: email,
        password: password
      };
      const attributeList: CognitoUserAttribute[] = [];
      const emailAttribute = {
        Name: 'email',
        Value: user.email
      };
      attributeList.push(new CognitoUserAttribute(emailAttribute));
      userPool.signUp(user.username, user.password, attributeList, null, (err, result) => {
        if (err) {
          // console.log(err);
          this.authDidFail.next(true);
          this.authIsLoading.next(false);
          observer.error('something went wroing');
        }
        this.authDidFail.next(false);
        this.authIsLoading.next(false);
        this.registeredUser = result.user;
        observer.next('user registerd');
        // this.router.navigate(['/landing/signin']);
      });
    });
  }
  // signUp method
  signUp(username: string, email: string, password: string): void {
    this.authIsLoading.next(true);
    const user: User = {
      username: username,
      email: email,
      password: password
    };
    const attributeList: CognitoUserAttribute[] = [];
    const emailAttribute = {
      Name: 'email',
      Value: user.email
    };

    attributeList.push(new CognitoUserAttribute(emailAttribute));
    userPool.signUp(user.username, user.password, attributeList, null, (err, result) => {
      if (err) {
        console.log(err);
        this.authDidFail.next(true);
        this.authIsLoading.next(false);
      }
      this.authDidFail.next(false);
      this.authIsLoading.next(false);
      this.registeredUser = result.user;
      this.router.navigate(['/landing/signin']);
    });
    return;
  }
  confirmUser(username: string, code: string) {
    this.authIsLoading.next(false);
    const userData = {
      Username: username,
      Pool: userPool
    };
    const cognitUser = new CognitoUser(userData);
    cognitUser.confirmRegistration(code, true, (err, result) => {
      if (err) {
        console.log(err);
        this.authDidFail.next(true);
        this.authIsLoading.next(false);
        return;
      }
      this.authDidFail.next(false);
      this.authIsLoading.next(false);
      console.log(result);
      this.router.navigate(['/landing/signin']);
    });
  }
  signIn(username: string, password: string): void {
    this.authIsLoading.next(true);
    const authData = {
      Username: username,
      Password: password
    };
    this.authStatusChanged.next(true);
    return;
  }
  getAuthenticatedUser() {
  }
  logout() {
    this.authStatusChanged.next(false);
  }
  isAuthenticated(): Observable<boolean> {
    const user = this.getAuthenticatedUser();
    const obs = Observable.create((observer) => {
      if (!user) {
        observer.next(false);
      } else {
        observer.next(false);
      }
      observer.complete();
    });
    return obs;
  }
  initAuth() {
    this.isAuthenticated().subscribe(
      (auth) => this.authStatusChanged.next(auth)
    );
  }
}
