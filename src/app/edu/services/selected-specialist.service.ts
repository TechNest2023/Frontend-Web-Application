import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Specialist } from '../model/specialist';

@Injectable({
  providedIn: 'root'
})
export class SelectedSpecialistService {

  private selectedSpecialistSource = new BehaviorSubject<Specialist | null>(null);
  selectedSpecialist$ = this.selectedSpecialistSource.asObservable();

  constructor() { }

  public setSelectedSpecialist(specialist: Specialist) {
    this.selectedSpecialistSource.next(specialist);
  }
}
