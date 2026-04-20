import {Routes} from "@angular/router";
import {ResumeComponent} from "./resume/resume.component";
import {HomeComponent} from "./home/home.component";
import {ProjectsComponent} from "./projects/projects.component";

export const routes:Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', data: { animation: 'HomePage' } },
  { path: 'resume', component: ResumeComponent, data: { animation: 'ResumePage' } },
  { path: 'projects', component: ProjectsComponent, data: { animation: 'ProjectsPage' } }
];
