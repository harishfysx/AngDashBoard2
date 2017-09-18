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

  constructor(private http: Http,
              private authService: AuthService ) { }
  saveCollection (collection: CollectionModel) {
    console.log(collection);
    return this.authService.getAuthenticatedUser().getSession((err, session) => {
      if (err) {
        console.log(err);
        return;
      }
      const jwtToken = session.getIdToken().getJwtToken();
      const headersVar = new Headers({'Authorization': jwtToken })
      console.log(jwtToken);
      return this.http.post(this.collectionsUrl, collection,  {headers: headersVar})
        .map(response => response.json())
        .catch(this.errorHanlder);
    });
  }
  private errorHanlder(error: Response) {
    console.log('called errorHandler')
    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    }
    return Observable.throw(new AppError(error));
  }

}
