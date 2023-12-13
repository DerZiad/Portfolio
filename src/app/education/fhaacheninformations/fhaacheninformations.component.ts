import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-fhaacheninformations',
  templateUrl: './fhaacheninformations.component.html',
  styleUrls: ['./fhaacheninformations.component.css']
})
export class FhaacheninformationsComponent implements AfterViewInit,OnDestroy{
  @Input("data") data:any;
  @Output() closeAction = new EventEmitter<boolean>();

  concepts = [
    ["Distributed System Development", 5],
    ["Machine Learning", 4],
    ["Self coded Implementation of Machine Learning Algorithms",4],
    ["Mathematical Concepts of Machine Learning Algorithms",4],
    ["Data Science", 4],
    ["Mathematicals Concept of Datascience",4],
    ["Artificial Intelligence (Search algorithms)", 4],
    ["Professional Universities Reports Writing", 5],
    ["Enforcing my Web Skills", 5],
    ["Rest API",5],
    ["Business Models", 4],
    ["Network Programming", 5],
    ["Advanced Java Programming", 5],
    ["Technical German Language", 3],
    ["Parallel Programming using C/C++", 4],
    ["Blockchain Technologies, Bitcoin analysis and algorithms (Analyse of Proof Of Work)", 5]
  ]

  technologies = [
    ["LateX",4],
    ["OpenMP C/C++",3],
    ["MPI C/C++",3],
    ["Java 17", 5],
    ["Java 20", 5],
    ["Kotlin",3],
    ['Java Multithreading',5],
    ["Java Networking",5],
    ["Spring MVC", 5],
    ["Spring Batch", 5],
    ["Spring Cloud", 5],
    ["Spring Gateway",4],
    ["Spring Configuration Server",3],
    ["Apache Kafka",3],
    ["Spring Circuit Breaker (Resilience4j)",4],
    ["Spring Security 3", 5],
    ["Spring WebFlux", 2],
    ["Spring Test",3],
    ["JUnit 5",4],
    ["Spring Using Kotlin",3],
    ["Batch Programming", 5],
    ["Angular", 5],
    ["TypeScript", 5],
    ["JavaScript", 5],
    ["ModbusTCP", 5],
    ["Python", 5],
    ["C/C++", 5],
    ["Pandas",5],
    ["Numpy",5],
    ["Scikit-Learn",5],
    ["Seaborn",2],
    ["Scipy",2],
    ["Matplotlib",5]
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

  star(shadow:string|number){
    var stars_string = ""
    for(var i:number = 1;i<=parseInt(typeof shadow === "string" ? shadow :"" + shadow,10);i++){
      stars_string += "⭐️"
    }
    return stars_string
  }

  ngOnDestroy(): void {
  }
}
