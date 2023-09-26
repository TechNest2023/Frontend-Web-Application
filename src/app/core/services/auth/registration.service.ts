import { Injectable } from '@angular/core';
import {RegistrationRequest} from "./registrationRequest";


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor() { }

  registration(credentials:any){
    console.log(credentials);
  }
}
