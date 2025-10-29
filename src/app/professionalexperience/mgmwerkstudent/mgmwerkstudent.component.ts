import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-mgmwerkstudent',
  templateUrl: './mgmwerkstudent.component.html',
  styleUrls: ['./mgmwerkstudent.component.css']
})
export class MgmwerkstudentComponent {
  @Input("data") data: any;
  @Output() closeAction = new EventEmitter<boolean>();

  concepts = [
    ["Applying my knowledge on a professional field", 5],
    ["Learning Kotlin and web programming using Spring Boot / Kotlin", 5],
    ["Learning programming workflows and process management by mgm", 5],
    ["Working in a team", 5],
    ["Exploring low-code platforms", 2],
    ["Applying informatics in a new branch", 4]
  ]

  technologies = [
    ["Java", 5],
    ["TypeScript",4],
    ["Kotlin", 4],
    ["Spring Boot with Kotlin and Java", 5],
    ["Camunda", 4],
    ["A12", 3],
    ["JUnit 5",4],
    ["Selenium",4],
    ["Gradle",2],
    ["Docker",4],
    ["React TS",2],
    ["Stripe API",4],
    ["PayPal API",4],
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
