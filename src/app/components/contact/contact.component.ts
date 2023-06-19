import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private titleService:Title) {
    this.titleService.setTitle("Contact");
  }
  linkedIn = faLinkedinIn;
  gitHub = faGithub;
}
