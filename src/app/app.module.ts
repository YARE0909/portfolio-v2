import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
    NavbarComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HeroComponent, data: { animationState: 'One' }},
      {path: 'about', component: AboutComponent, data: { animationState: 'Two' }},
      {path: 'skills', component: SkillsComponent, data: { animationState: 'Three' }},
      {path: 'contact', component: ContactComponent, data: { animationState: 'Four' }},
      {path: 'projects', component: ProjectsComponent, data: { animationState: 'Five' }},
    ]),
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
