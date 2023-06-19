import { Component } from '@angular/core';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import {Title} from "@angular/platform-browser";
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private titleService:Title) {
    this.titleService.setTitle("About");
  }
  linkedIn = faLinkedinIn;
  gitHub = faGithub;
}
