import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MaterialModule } from './data/material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { AcademicItemComponent } from './pages/about/academic-item/academic-item.component';
import { ProjectComponent } from './pages/projects/project/project.component';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from  'ng-gallery/lightbox';
@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NavBarComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    AcademicItemComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
    FormsModule,
    GalleryModule,
    LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
