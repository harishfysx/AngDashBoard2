import {Component, OnInit, ViewChild} from '@angular/core';
import {DatatableComponent} from '@swimlane/ngx-datatable';
import {MockUpService} from '../../shared/demos/mockup.service';





@Component({
  selector: 'app-college-collections',
  templateUrl: './college-collections.component.html',
  styleUrls: ['./college-collections.component.scss']
})
export class CollegeCollectionsComponent {
  rows = [];

  temp = [];

  columns = [
    { prop: 'name' },
    { name: 'Company' },
    { name: 'Gender' }
  ];
  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(private mockService: MockUpService) {
    this.fetch((data) => {
      // cache our list
      this.temp = [...data];

      // push our inital complete list
      this.rows = data;
    });
  }

  fetch(cb) {
    /*
    const req = new XMLHttpRequest();
    req.open('GET', `../../shared/demos/company.json`);
    req.onload = () => {
      cb(JSON.parse(req.response));
    };
    req.send();
    */
    this.mockService.getSampleCompanies().subscribe((res) => {
      console.log(res);
      cb(res);
    });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
}




