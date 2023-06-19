import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  constructor(private titleService:Title) {
    this.titleService.setTitle("Pradyumna D");
  }
  linkedIn = faLinkedinIn;
  gitHub = faGithub;
}
