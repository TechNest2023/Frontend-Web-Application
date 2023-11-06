import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  options =[
    {
      path:'/home',
      title: 'Home',
      titleIcon: 'home',
    },
    {
      path:'/edu/my-advice',
      title: 'My Advice',
      titleIcon: 'people',
    }
  ]
}
