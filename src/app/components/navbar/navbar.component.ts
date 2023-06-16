import { Component } from '@angular/core';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navBar: boolean = false;
  mobileNavbar: boolean = true;
  menu = faBars;
  close = faClose;

  setNavbar() {
    this.navBar = !this.navBar
  }
  setMobileNavbar() {
    this.mobileNavbar = !this.mobileNavbar
  }
}
