import {Routes} from "@angular/router";
import {ResumeComponent} from "./resume/resume.component";
import {HomeComponent} from "./home/home.component";
import {EducationComponent} from "./education/education.component";
import {ProjectsComponent} from "./projects/projects.component";

export const routes:Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'abstract', component: ResumeComponent },
  { path: 'education', component: EducationComponent },
  { path: 'projects', component: ProjectsComponent }
];
