import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegistrationRequest} from "./registrationRequest";
import {catchError, throwError} from "rxjs";
import {BaseService} from "../../../shared/services/base.service";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService extends BaseService<RegistrationRequest>  {
    constructor(http: HttpClient) {
        super(http);
        this.resourceEndpoint = '/students';
    }

    createUser(registrationData: RegistrationRequest) {
        return this.create(registrationData).pipe(
            catchError(error => {
                console.error('Error al hacer la solicitud HTTP:', error);
                return throwError(error);
            })
        );
    }
}
