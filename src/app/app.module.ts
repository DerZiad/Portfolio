import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { routes } from "./Routes";
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    HomeComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgOptimizedImage
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
