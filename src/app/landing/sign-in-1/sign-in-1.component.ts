import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in-1.component.html',
  styleUrls: ['./sign-in-1.component.scss']
})
export class PageSignInComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() { }

  onSubmit() {
    this.router.navigate(['/default-layout/dashboard']);
  }
}
