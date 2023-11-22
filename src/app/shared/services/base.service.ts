import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.development";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Profile} from "../../edu/model/profile";

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
  basePath: string = `${environment.serverBasePath}`;
  resourceEndpoint: string = '/resources';

  httpOptions ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  private resourcePath() : string {
    return   `${this.basePath}${this.resourceEndpoint}`;
  }

    handleError(error: HttpErrorResponse){
        // Default error handling
        if (error.error instanceof ErrorEvent){
            console.error(`An error ocurred: ${error.error.message}`);
        } else {
            // Unsuccesful response error code returned from backend
            console.log(`Backend returned core ${error.status}, body was ${error.error}`);
            console.error('Full error object:', error); // Log the entire error object for more details
        }
        // Return an observable with a user-facing error message
        return throwError(() => new Error('Something happened with request, please try again later.'));
    }



    create(data: T):Observable<T> {
        return this.http.post<T>(this.resourcePath(), data, this.httpOptions)
            .pipe(retry(2), catchError(this.handleError));
    }


  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.resourcePath(), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getById(id: string): Observable<T> {
    return this.http.get<T>(`${this.resourcePath()}/${id}`, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  authenticate(credentials: T): Observable<any> {
    return this.http.post<any>(`${this.basePath}${this.resourceEndpoint}/login`, credentials, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getProfileById(id: string): Observable<Profile> {
    return this.http.get<Profile>(`${this.basePath}/profiles/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
}
