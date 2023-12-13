import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {reduce} from "rxjs/operators";

@Component({
  selector: 'app-projectdescription',
  templateUrl: './projectdescription.component.html',
  styleUrls: ['./projectdescription.component.css']
})
export class ProjectdescriptionComponent implements OnInit, AfterViewInit,OnDestroy {


  @Input("data") data:any;
  @Output() closeAction = new EventEmitter<boolean>();

  changeParentVariable() {
    // Emit the event with the new value you want to send to the parent component
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

  ngOnDestroy(): void {

  }

  ngOnInit(): void {
    console.log("again")
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

  star(shadow:number){
    var stars_string = ""
    for(var i:number = 1;i<=shadow;i++){
      stars_string += "⭐️"
    }
    return stars_string
  }

}
