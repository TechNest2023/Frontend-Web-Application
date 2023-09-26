import { Injectable } from '@angular/core';
import {LoginRequest} from "./loginRequest";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  logIn(credentials:LoginRequest){
    console.log(credentials);
  }
}
