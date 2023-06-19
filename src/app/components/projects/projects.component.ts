import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor(private titleService:Title) {
    this.titleService.setTitle("Projects");
  }
  projects = [
    {
      project: "FACIAL VERIFICATION APP",
      link: "https://capx-facial-recognition.vercel.app/"
    },
    {
      project: "INFOSTASH WEBSITE",
      link: "https://infostash-web.vercel.app/"
    },
    {
      project: "MOZOHACK 4.0",
      link: "https://mozohack.srmkzilla.net/"
    },
    {
      project: "MOZOFEST 2023",
      link: "https://mozofest.srmkzilla.net/"
    },
  ]
}
