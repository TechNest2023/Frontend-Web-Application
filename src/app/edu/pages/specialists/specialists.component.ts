import {Component, OnInit } from '@angular/core';
import {Specialist} from '../../model/specialist';
import {SpecialistService} from "../../services/specialist.service";

@Component({
  selector: 'app-specialists',
  templateUrl: './specialists.component.html',
  styleUrls: ['./specialists.component.css']
})
export class SpecialistsComponent implements OnInit {
  specialists: Specialist[] = [];

  constructor(private specialistService: SpecialistService) {


  }
  ngOnInit() {
    this.getAllSpecialists();
  }

  private getAllSpecialists() {
    this.specialistService.getAll().subscribe((response: Specialist[]) => {
      console.log(response);
      this.specialists = response;
    });
  }
}
