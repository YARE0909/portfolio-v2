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
  skill: boolean = false;
  language: boolean = true;

  languages = [
    {
      skill: "Javascript",
      icon: "../../../assets/jsIcon.png"
    },
    {
      skill: "Typescript",
      icon: "../../../assets/tsIcon.png"
    },
    {
      skill: "Python",
      icon: "../../../assets/pythonIcon.png"
    },
    {
      skill: "C",
      icon: "../../../assets/CIcon.png"
    },
    {
      skill: "C++",
      icon: "../../../assets/CppIcon.png"
    },
    {
      skill: "Java",
      icon: "../../../assets/javaIcon.png"
    },
    {
      skill: "Rust",
      icon: "../../../assets/rustIcon.png"
    },
  ]
  skills = [
    {
      skill: "Angular",
      icon: "../../../assets/angularIcon.png"
    },
    {
      skill: "React Js",
      icon: "../../../assets/reactIcon.png"
    },
    {
      skill: "React Native",
      icon: "../../../assets/reactNativeIcon.webp"
    },
    {
      skill: "Next Js",
      icon: "../../../assets/nextJsIcon.png"
    },
    {
      skill: "Tailwind Css",
      icon: "../../../assets/tailwindCssIcon.png"
    },
    {
      skill: "Github",
      icon: "../../../assets/githubIcon.png"
    },
    {
      skill: "Node Js",
      icon: "../../../assets/nodeJsIcon.png"
    },
  ]

  setLanguage() {
    this.language = true;
    this.skill = false;
  }
  setSkill() {
    this.skill = true;
    this.language = false;
  }
}
