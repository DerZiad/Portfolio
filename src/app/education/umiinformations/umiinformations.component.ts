import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-umiinformations',
  templateUrl: './umiinformations.component.html',
  styleUrls: ['./umiinformations.component.css']
})
export class UmiinformationsComponent implements OnInit{
  @Input("data") data: any;
  @Output() closeAction = new EventEmitter<boolean>();


  afrika_robotik_brains = [
    ["/assets/img/events/africaroboticbrains/1.jpg", "Africa Robotics Brain Map","picture"],
    ["/assets/img/events/africaroboticbrains/2.jpg", "Demo Robot","picture"],
    ["/assets/img/events/africaroboticbrains/robotics.mp4", "3D Printer","video"],
      ["/assets/img/events/africaroboticbrains/3.jpg", "Some Pictures Working On Mounting The Robot","picture"],
    ["/assets/img/events/africaroboticbrains/4.jpg", "Running some tests using Raspberry PI","picture"],
    ["/assets/img/events/africaroboticbrains/5.jpg", "Programming NAO using Choreograph","picture"],
    ["/assets/img/events/africaroboticbrains/5.MOV", "Testing Robot before the competition","video"],
    ["/assets/img/events/africaroboticbrains/6.MOV", "NAO Dancing","video"],
    ["/assets/img/events/africaroboticbrains/finaltest.MOV", "Final test for the robot","video"]
  ]

  coding_day = [
    ["/assets/img/events/codingday/1.jpg", "Africa Robotics Brain Map","picture"],
    ["/assets/img/events/codingday/2.jpg", "Demo Robot","picture"],
    ["/assets/img/events/codingday/3.jpg", "Some Pictures Working On Mounting The Robot","picture"],
  ]

  fsm = [
    ["/assets/img/events/fsm/1.jpg","Some Picture with my friends","picture"],
    ["/assets/img/events/fsm/2.jpg","Some Picture with my friends","picture"]
  ]

  concepts = [
    ["Linear Algebra 1", 4],
    ["Analysis 1", 4],
    ["Analysis 2", 4],
    ["Algorithms 1", 5],
    ["Java 1", 5],
    ["Linear Algebra 2", 4],
    ["Analysis 3", 5],
    ["Analysis 4", 3],
    ["Informatics Knowledge (Binary Calculation, Network 1, Boolean Algebra, Command Line Windows)", 5],
    ["Java 2", 5],
    ["Probability", 5],
    ["Numerical Analysis 1", 4],
    ["Numerical Analysis 1, Computer practice using Python",5],
    ["Software Engineering 1 (Scrum Method and Software Development Cycle)", 5],
    ["Software Engineering 2 (UML)", 5],
    ["Database Oracle", 5],
    ["Statistics", 5],
    ["Statistics Computer Practice Using R"],
    ["Numerical Analysis 2", 5],
    ["Numerical Analysis 2, Computer practice using Python",5],
    ["Algorithms 2 using C", 5],
    ["Web Development using JEE / Deliberation Project", 5],
    ["Robotics 2", 4],
    ["C++", 5],
    ["Web Development using Spring Boot / JEE", 5],
    ["Artificial Intelligence - Machine Learning - Deep Learning / Diabetic Project", 5],
    ["Operating Systems / Shell Programming using Linux", 5],
    ["Computer Architecture using Assembly / ASM Programming", 5],
    ["Networking / Networking Using Java / Networking using C/C++", 5],
    ["Robotics 1", 5],
    ["German A1/A2/B1/B2", 4]
  ]

  technologies = [
    ["Java", 5],
    ["Java Mail API", 5],
    ["Java AWT / Swing / FX", 3],
    ["Windows Batching", 5],
    ["Python", 5],
    ["Numpy", 3],
    ['Pandas', 5],
    ["Seaborn", 5],
    ["Scipy", 5],
    ["Matplotlib", 5],
    ["Scikit-Learn", 5],
    ["Tensorflow", 4],
    ["UML 2", 5],
    ["Scrum Method", 4],
    ["Business Agility / Software Developing skills", 5],
    ["SQL - MySQL - PostgresSQL - Oracle", 5],
    ["Statistics using R",3],
    ["C/C++ - ", 5],
    ["Algorithms", 5],
    ["JEE - JSTL - JSP - DB Connector - JSON using Jackson, GSON", 5],
    ["Arduino Programming", 5],
    ["Java/C++ Networking", 5],
    ["Network Services Configuration on Linux ( DNS Server - DHCP Server ... )",5],
    ["Assembly", 5],
    ["Linux - Linux batching", 5],
    ["Spring Boot / Framework - Monolithic Application Developing", 5],
    ["Advanced Raspberry usage", 5],
    ["Computer Vision", 5],
    ["Kali Linux",5]
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

  ngOnInit(): void {

  }
}
