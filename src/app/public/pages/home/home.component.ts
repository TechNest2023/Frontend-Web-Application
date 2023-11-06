import {Component, OnInit, ViewChild} from '@angular/core';
import {SpecialistsComponent} from "../../../edu/pages/specialists/specialists.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  @ViewChild(SpecialistsComponent) specialistsComponent!: SpecialistsComponent;

  constructor() { }

  ngOnInit() {
  }

  onSearch(search: string) {
    this.specialistsComponent.search = search;
    this.specialistsComponent.getAllSpecialists();
  }
}
