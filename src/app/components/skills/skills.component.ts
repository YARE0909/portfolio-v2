import { Component } from '@angular/core';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  linkedIn = faLinkedinIn;
  gitHub = faGithub;

  skills = [
    {
      skill: "Angular",
      icon: "https://static-00.iconduck.com/assets.00/file-type-angular-icon-1907x2048-tobdkjt1.png"
    },
    {
      skill: "React Js",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
    },
    {
      skill: "React Native",
      icon: "https://camo.githubusercontent.com/9a45407f0a2a0c52f76b9458728049eca3ddb60ecec92a43f8cd2af93d253940/68747470733a2f2f7061676570726f2e636f2f626c6f672f77702d636f6e74656e742f75706c6f6164732f323032302f30332f72656163742d6e61746976652d6c6f676f2d333234783337352e706e67"
    },
    {
      skill: "Next Js",
      icon: "https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png"
    },
    {
      skill: "Tailwind Css",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png"
    },
    {
      skill: "Github",
      icon: "https://static-00.iconduck.com/assets.00/github-icon-2048x1988-jzvzcf2t.png"
    },
    {
      skill: "Node Js",
      icon: "https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png"
    },
  ]
}
