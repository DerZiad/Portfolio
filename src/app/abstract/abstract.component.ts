import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-abstract',
  templateUrl: './abstract.component.html',
  styleUrls: ['./abstract.component.css']
})
export class AbstractComponent {

  constructor(private http:HttpClient){

  }
  downloadFile(type: number): void {
    this.http.get("/assets/pdf/" + (type==1?"CV_Ziad_Bougrine_EN.pdf":"CV_Ziad_Bougrine_DE.pdf"), { responseType: 'blob' }).subscribe((response: Blob) => {
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(response);
      downloadLink.download = (type==1?"CV":"Lebenslauf") + "_Ziad_Bougrine"
      downloadLink.click();
    });
  }
}
