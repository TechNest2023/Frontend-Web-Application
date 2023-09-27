import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  currentRoute: string | undefined = '';
  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentRoute = this.router.url.split('/').pop();
        console.log(this.currentRoute);
      });
  }
  enableNavBar(): boolean {
    return !(
      this.currentRoute === 'log-in' || this.currentRoute === 'register'
    );
  }
  enableSidebar(): boolean{
     return !(
       this.currentRoute === 'log-in' || this.currentRoute === 'register' || this.currentRoute=='home'
     );
  }


  selectedComponent: string = 'select-specialist';

  changeComponent(componentName: string) {
    this.selectedComponent = componentName;
  }

}
