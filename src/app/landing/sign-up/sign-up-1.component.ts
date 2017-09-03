import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up-1',
  templateUrl: './sign-up-1.component.html',
  styleUrls: ['./sign-up-1.component.scss']
})
export class PageSignUp1Component implements OnInit {
  constructor(private router: Router,
    private authService: AuthService) { }

  ngOnInit() { }

  onSubmit(f: NgForm) {
    const usrName = f.value.userName;
    const email = f.value.email;
    const password = f.value.password;
    // this.authService.signUp(usrName, email, password);
    this.authService.signObs(usrName, email, password).subscribe((result) => {
      console.log(result);
    }, (error) => {
      console.log(error);
    });
  }
}
