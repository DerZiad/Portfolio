import {AfterViewInit, Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit {
  title = 'ziadbougrine';

  mouseclickSound = new Audio('/assets/mp3/normal-click.wav');
  mouseenterSound = new Audio('/assets/mp3/mousemove.wav');

  hidden = true


  first_name: string = ""
  email: string = ""
  phone: string = ""
  duringThread: boolean = true

  active_page_number:number = 1
  position = 0
  number_of_elements: number = 5


  constructor(private http:HttpClient) {

  }


  ngOnInit(): void {
    this.changePosition(0)
  }


  ngAfterViewInit(): void {

  }

  downloadFile(type: number): void {
    this.http.get("/assets/pdf/" + (type==1?"CV-Ziad-BOUGRINE-2023-EN.pdf":"CV-Ziad-BOUGRINE-2023-DE.pdf"), { responseType: 'blob' }).subscribe((response: Blob) => {
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(response);
      downloadLink.download = (type==1?"CV":"Lebenslauf") + "_Ziad_Bougrine"
      downloadLink.click();
    });
  }

  handleCustomEvent(message: boolean) {
    this.hidden = message;
  }



  get_background():String{
    return this.hidden ? "black-background":"linear-gradient"
  }


  show(shadow:number){
    this.active_page_number = shadow
  }

  isActive(shadow:number):String{
    return shadow == this.active_page_number?"active active-header":""
  }

  skipIntro(){
    this.hidden = false
  }


  changePosition(position: number) {
    if (position < this.number_of_elements) {
      setTimeout(() => {
        this.changePosition(++this.position)
      }, 2000)
    } else {
      this.hidden = false
    }
  }

  show_me(): boolean {
    return this.position == this.number_of_elements
  }


  closeNavbar(): void {
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar != null && navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  }

}

