import {Routes} from "@angular/router";
import {ProfileComponent} from "./profile/profile.component";
import {HomeComponent} from "./home/home.component";
import {ProfessionalexperienceComponent} from "./professionalexperience/professionalexperience.component";
import {EducationComponent} from "./education/education.component";
import {ProjectsComponent} from "./projects/projects.component";

export const routes:Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'abstract', component: ProfileComponent },
  { path: 'professional-experience', component: ProfessionalexperienceComponent },
  { path: 'education', component: EducationComponent },
  { path: 'projects', component: ProjectsComponent }
];
