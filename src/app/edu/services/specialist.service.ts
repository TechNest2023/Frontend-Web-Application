import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../shared/services/base.service";
import {Specialist} from "../model/specialist";


@Injectable({
  providedIn: 'root'
})
export class SpecialistService extends BaseService<Specialist>{
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint ='/specialists';
  }

}
