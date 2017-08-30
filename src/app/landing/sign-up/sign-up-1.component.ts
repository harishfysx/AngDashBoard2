import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'app-sign-up-1',
  templateUrl: './sign-up-1.component.html',
  styleUrls: ['./sign-up-1.component.scss']
})
export class PageSignUp1Component implements OnInit {
  constructor(private authService: AuthService) { }

  ngOnInit() { }

  onSubmit(f: NgForm) {
    const usrName = 'harish';
    const email = f.value.email;
    const password = f.value.password;
    this.authService.signUp(usrName, email, password);
  }
}
