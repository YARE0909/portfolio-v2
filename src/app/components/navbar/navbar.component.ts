import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';
import { navOptionsInterface } from 'src/interfaces/navOptionsInterface';
import { Location } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private router: Router, private location: Location ) { }

  currentRoute!:string;
  routeName!:any;
  currentNavOption!: navOptionsInterface[];
  ngOnInit() {
    this.currentRoute = this.location.path();
    this.routeName = this.navOptions.filter(x => x.path === this.currentRoute.slice(1));
    this.currentNavOption = this.navOptions.filter(x => x.path !== this.currentRoute.slice(1))
  }
  navOptions: navOptionsInterface[] = [
    {
      name: 'CONTACT',
      path: 'contact',
    },
    {
      name: 'SKILLS',
      path: 'skills',
    },
    {
      name: 'ABOUT',
      path: 'about',
    },
    {
      name: 'HOME',
      path: '',
    },
  ];
}
