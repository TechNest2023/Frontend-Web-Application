import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../../services/profile.service";
import {Profile} from "../../model/profile";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  implements OnInit{

  profile: Profile | undefined;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getLoggedInUserProfile().subscribe(
      (profile) => {
        this.profile = profile;
      },
      (error) => {
        console.error('Error fetching logged-in user profile:', error);
      }
    );
  }
}
