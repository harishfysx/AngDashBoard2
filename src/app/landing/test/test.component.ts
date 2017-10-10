import { Component, OnInit } from '@angular/core';
import {Event} from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClose(evnet: Event) {
    console.log(evnet);
  }
}
