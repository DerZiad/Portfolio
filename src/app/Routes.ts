import {Routes} from "@angular/router";
import {ResumeComponent} from "./resume/resume.component";
import {HomeComponent} from "./home/home.component";
import {ProjectsComponent} from "./projects/projects.component";

export const routes:Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'resume', component: ResumeComponent },
  { path: 'projects', component: ProjectsComponent }
];
