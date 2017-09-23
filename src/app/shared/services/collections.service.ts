import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {AppError} from '../errors/app.error';
import {NotFoundError} from '../errors/not.found.error';
import {awsBieApiUrl} from '../../../../config/config';
import {CollectionModel} from '../models/collection.model';
import {AuthService} from './auth.service';



@Injectable()
export class CollectionsService {
  private collectionsUrl = awsBieApiUrl + '/collections';
  private colStudUrl = awsBieApiUrl + '/col-stdnts/';
  private jwtToken;

  constructor(private http: Http,
              private authService: AuthService ) {
    authService.getAuthenticatedUser().getSession((err, session) => {
      if (err) { console.log(err); } else {
        this.jwtToken = session.getIdToken().getJwtToken();
        console.log(this.jwtToken);
      }
    });
  }
  saveCollection (collection: CollectionModel) {
    const headersVar = new Headers({'Authorization': this.jwtToken })
    return this.http.post(this.collectionsUrl, collection,  {headers: headersVar})
      .map(response => response.json())
      .catch(this.errorHanlder);
  }
  getCollections () {
    const url = this.collectionsUrl;
    const headersVar = new Headers({'Authorization': this.jwtToken });
    return this.http.get(url + '?sortOrder=asc',  {headers: headersVar})
      .map(response => response.json())
      .catch(this.errorHanlder);
  }

  getStudentsInCollection (className: string, sortField: string, sortOrder: string) {
    const url = this.colStudUrl + className + '?sortField=' + sortField + '&sortOrder=' + sortOrder;
    const headersVar = new Headers({'Authorization': this.jwtToken });
    return this.http.get(url,  {headers: headersVar})
      .map(response => response.json())
      .catch(this.errorHanlder);
  }
  private errorHanlder(error: Response) {
    console.log('called errorHandler')
    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    }
    return Observable.throw(new AppError(error));
  }

}
