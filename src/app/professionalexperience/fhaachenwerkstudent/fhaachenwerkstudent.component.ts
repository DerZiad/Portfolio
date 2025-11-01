import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-fhaachenwerkstudent',
  templateUrl: './fhaachenwerkstudent.component.html',
  styleUrls: ['./fhaachenwerkstudent.component.css']
})
export class FhaachenwerkstudentComponent {
  @Input("data") data: any;
  @Output() closeAction = new EventEmitter<boolean>();

  proof_of_concept = [["/assets/img/professionalexperience/1.png", "dssdsd", "picture"], ["/assets/img/professionalexperience/2.png", "dssdsdds", "picture"], ["/assets/img/professionalexperience/3.png", "dsdssd", "picture"], ["/assets/img/professionalexperience/4.png", "dsdssd", "picture"], ["/assets/img/professionalexperience/5.png", "dsdssd", "picture"]]

  concepts = [
    ["Applying my knowledge on a professional field", 5],
    ["Learning ModbusTCP and hardware programming and controlling", 5],
    ["Learning Realtime data control", 5],
    ["Working in a team", 5],
    ["Exploring physics world", 2],
    ["Applying informatics in a new branch", 4]
  ]

  technologies = [
    ["Java", 5],
    ["TypeScript",4],
    ["Java Networking", 5],
    ["Spring Boot", 5],
    ["Spring Batch", 5],
    ["Spring Data", 5],
    ["Spring Web", 5],
    ['Spring Mail', 5],
    ["Spring Security 3", 5],
    ["Spring Validator", 5],
    ["Spring Batch", 5],
    ["Lombok", 5],
    ["Google GSON", 4],
    ["Angular 12", 5],
    ["ModBus TCP", 4],
    ["H2 Database / MySQL / MariaDB", 5],
    ["JavaScript / HTML / CSS / SCSS", 5],
    ["Raspberry Deployment", 4],
    ["Git",5]
  ]


  changeParentVariable() {
    this.closeAction.emit(false);
    this.ngOnDestroy()
  }


  rotation = 0

  windowWidth = 500


  initialFontSize = 70
  initialHeight = 150
  initialWidth = 150

  constructor() {

  }

  closeElement() {
    var element = document.getElementById("close")

    element?.classList.add("swipe-left-class")

    setTimeout(() => {

        this.changeParentVariable()
      }
      , 300)


  }

  ngAfterViewInit(): void {
    this.extendTab()
  }

  extendTab() {
    var element = document.getElementById("close")
    if (element != null) {
      this.windowWidth = this.windowWidth == 500 ? window.innerWidth : 500
      element.style.maxWidth = this.windowWidth + "px"
    }
  }

  star(shadow: string | number) {
    var stars_string = ""
    for (var i: number = 1; i <= parseInt(typeof shadow === "string" ? shadow : "" + shadow, 10); i++) {
      stars_string += "⭐️"
    }
    return stars_string
  }

  ngOnDestroy(): void {
  }
}
