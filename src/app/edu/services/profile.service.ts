import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../shared/services/base.service";
import {Profile} from "../model/profile";
import {map, Observable, of, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends BaseService<Profile> {

  constructor(http: HttpClient)  {
    super(http);
    this.resourceEndpoint ='/profiles';
  }


  getLoggedInUserProfile(): Observable<Profile> {
    const loggedInUserId = localStorage.getItem('loggedInUserId');

    if (loggedInUserId) {
      return this.getById(loggedInUserId);
    } else {
      return throwError('User ID not found');
    }
  }
}
