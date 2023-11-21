import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {basePath} from "../../basePath";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private resourceEndpoint = '/reservations';
  private path = `${basePath}${this.resourceEndpoint}`
  constructor(private httpClient:HttpClient) { }

  public createReservation(reservation: any) {
    console.log("reservation", reservation);
    return this.httpClient.post(this.path, reservation);
  }
}
