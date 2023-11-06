import { Component, OnInit } from '@angular/core';
import {SelectedSpecialistService} from "../../services/selected-specialist.service";
import {Specialist} from "../../model/specialist";

@Component({
  selector: 'app-selected-specialists',
  templateUrl: './selected-specialists.component.html',
  styleUrls: ['./selected-specialists.component.css']
})
export class SelectedSpecialistsComponent implements OnInit {
  selectedSpecialists: Specialist[] = [];

  constructor(private selectedSpecialistService: SelectedSpecialistService) { }

  ngOnInit() {
    this.selectedSpecialistService.selectedSpecialist$.subscribe(specialist => {
      if (specialist) {
        this.selectedSpecialists.push(specialist);
      }
    });
  }
}
