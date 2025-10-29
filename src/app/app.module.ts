import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import {FormsModule} from "@angular/forms";
import { ProjectdescriptionComponent } from './projects/projectdescription/projectdescription.component';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { FhaacheninformationsComponent } from './education/fhaacheninformations/fhaacheninformations.component';
import { UmiinformationsComponent } from './education/umiinformations/umiinformations.component';
import { ProfessionalexperienceComponent } from './professionalexperience/professionalexperience.component';
import { FhaachenwerkstudentComponent } from './professionalexperience/fhaachenwerkstudent/fhaachenwerkstudent.component';
import { MgmwerkstudentComponent } from './professionalexperience/mgmwerkstudent/mgmwerkstudent.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectdescriptionComponent,
    HomeComponent,
    ProfileComponent,
    SkillsComponent,
    EducationComponent,
    FhaacheninformationsComponent,
    UmiinformationsComponent,
    ProfessionalexperienceComponent,
    FhaachenwerkstudentComponent,
    MgmwerkstudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
