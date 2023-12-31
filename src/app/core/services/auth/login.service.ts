import { Injectable } from '@angular/core';
import {LoginRequest} from "./loginRequest";
import {BaseService} from "../../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService<LoginRequest> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/profiles';
  }

  logIn(credentials:LoginRequest):Observable<any>{
    return this.authenticate(credentials)
      .pipe(
        tap(response => {
          if (response && response.profileId) {
            localStorage.setItem('loggedInUserId', response.profileId);
          }
        })
      );
  }

}
