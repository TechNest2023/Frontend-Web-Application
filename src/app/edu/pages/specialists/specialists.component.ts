import {Component, OnInit} from '@angular/core';
import {Specialist} from '../../model/specialist';
import {SpecialistService} from "../../services/specialist.service";
import {SelectedSpecialistService} from "../../services/selected-specialist.service";


@Component({
  selector: 'app-specialists',
  templateUrl: './specialists.component.html',
  styleUrls: ['./specialists.component.css']
})
export class SpecialistsComponent implements OnInit {
  specialists: Specialist[] = [];
  search!: string;

  constructor(private specialistService: SpecialistService, private selectedSpecialistService: SelectedSpecialistService) {

  }

  ngOnInit() {
    this.getAllSpecialists();
  }

  public getAllSpecialists() {
    this.specialistService.getAll().subscribe((response: Specialist[]) => {
      console.log(response);
      this.specialists = this.search ? response.filter(specialist => specialist.fullname.toLowerCase().includes(this.search.toLowerCase())) : response;
    });
  }

  onReserve(specialist: Specialist) {
    this.selectedSpecialistService.setSelectedSpecialist(specialist);
  }
}
