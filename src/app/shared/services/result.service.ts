import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {AppError} from '../errors/app.error';
import {NotFoundError} from '../errors/not.found.error';
import {awsBieApiUrl} from '../../../../config/config';


@Injectable()
export class ResultService {
  private studentsUrl = awsBieApiUrl + '/students';
  private testEndPointURl = awsBieApiUrl + '/testEndPoints';

  constructor(private http: Http) { }
  getStudent (hallTicket: number) {
    const url = `${this.studentsUrl}/${hallTicket}`;
    return this.http.get(url).catch(this.errorHanlder);
  }

  getSampleStudents () {
    const url = 'http://172.16.180.122:3000/api/student/sampleStudents'
    return this.http.get(url).catch(this.errorHanlder);
  }
  getSampleUsers () {
    const url = this.testEndPointURl + '/sampleusers';
    return this.http.get(url).catch(this.errorHanlder);
  }
  getSampleElements () {
    const url = this.testEndPointURl + '/sampleelements';
    return this.http.get(url).catch(this.errorHanlder);
  }
  private errorHanlder(error: Response) {
    console.log('called errorHandler')
    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    }
    return Observable.throw(new AppError(error));
  }

}
