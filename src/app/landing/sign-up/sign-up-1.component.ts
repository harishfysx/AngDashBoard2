import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {User} from '../../shared/services/user.model';

@Component({
  selector: 'app-sign-up-1',
  templateUrl: './sign-up-1.component.html',
  styleUrls: ['./sign-up-1.component.scss']
})
export class PageSignUp1Component implements OnInit, OnDestroy {
signObsSubscription: Subscription;

  constructor(private router: Router,
    private authService: AuthService) { }

  ngOnInit() { }

  onSubmit(f: NgForm) {
    const usrName = f.value.userName;
    const email = f.value.email;
    const password = f.value.password;
    this.signObsSubscription = this.authService.signObs(usrName, email, password).
      subscribe((value: User) => {
      console.log(value);
      this.router.navigate(['/landing/confirm',value.email]);
    }, (error) => {
      console.log(error);
    });
  }

  ngOnDestroy(): void {
    this.signObsSubscription.unsubscribe();
  }
}
