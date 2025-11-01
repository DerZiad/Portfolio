import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  constructor(private http:HttpClient){}

  downloadFile(): void {
    this.http.get("/assets/pdf/CV_Ziad_Bougrine_EN.pdf", { responseType: 'blob' }).subscribe((response: Blob) => {
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(response);
      downloadLink.download = "CV_Ziad_Bougrine_EN.pdf";
      downloadLink.click();
      URL.revokeObjectURL(downloadLink.href);
    });
  }
}
