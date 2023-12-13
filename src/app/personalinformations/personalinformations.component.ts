import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-personalinformations',
  templateUrl: './personalinformations.component.html',
  styleUrls: ['./personalinformations.component.css']
})
export class PersonalinformationsComponent implements OnInit {

  console: string = "|"
  console_animation: string = "Full Stack Developer"
  full_text: string = "Full Stack Developer"
  delete: boolean = true


  @Output() childEvent = new EventEmitter<boolean>();

  constructor(private http: HttpClient) {

  }

  downloadFile(type: number): void {
    this.http.get("/assets/pdf/" + (type == 1 ? "CV-Ziad-BOUGRINE-2023-EN.pdf" : "CV-Ziad-BOUGRINE-2023-DE.pdf"), {responseType: 'blob'}).subscribe((response: Blob) => {
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(response);
      downloadLink.download = (type == 1 ? "CV" : "Lebenslauf") + "_Ziad_Bougrine"
      downloadLink.click();
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.hideConsoleAndShow()
    }, 200)


    setTimeout(() => {
      this.hideWord(this.full_text.length)
    }, 3000)

  }

  hideConsoleAndShow() {
    if (this.console == "|") {
      this.console = ""
    } else {
      this.console = "|"
    }
    setTimeout(() => {
      this.hideConsoleAndShow()
    }, 200)
  }


  hideWord(n: number) {
    this.console_animation = this.console_animation.substring(0, n)
    n -= 1

    if (n < 0) {
      setTimeout(()=>{
        this.showWord(0)
      },2000)
    }else{
      setTimeout(() => {
        this.hideWord(n)
      }, 200)
    }

  }

  showWord(n: number) {
    this.console_animation = this.console_animation +  this.full_text.charAt(n)
    n++

    if(n>=this.full_text.length){
      setTimeout(()=>{

        this.hideWord(this.full_text.length)
      },6000)
    }else{
      setTimeout(() => {
        this.showWord(n)
      }, 100)
    }
  }


}
