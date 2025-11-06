import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  showDataActiveFHAachen: boolean = false
  showDataActiveUMI:boolean = false

  constructor() {
  }

  goToLink(dataEntity: any): void {
    document.location.replace(dataEntity.link)
  }

  hover(dataEntity: any, test: boolean): void {
    if (test) {
      var element = document.getElementById(dataEntity.name)
      if (element != null) {
        element.style.background = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('" + dataEntity.image + "');"
      }
    } else {
      var element = document.getElementById(dataEntity.name)
      if (element != null) {
        element.style.backgroundImage = "url('" + dataEntity.image + "');"
      }
    }
  }

  ngOnInit(): void {

  }

  isActive(index: number) {
    if (index == 0)
      return "active"
    else
      return ""
  }

  isAreaCurrent(index: number) {
    if (index == 0)
      return true
    else
      return false
  }

  getKeys(dict: any): string[] {
    return Object.keys(dict)
  }

  getValue(dict: any, key: string): string {
    return dict[key]
  }

  showMore(dataEntity: string) {
    if(dataEntity == "fh"){
      this.showDataActiveFHAachen = true
    }else {
      this.showDataActiveUMI = true
    }
  }


  onChildCloseChanged(university:string,close: boolean) {
    if(university=="fh"){
      this.showDataActiveFHAachen = close
    }else{
      this.showDataActiveUMI = close
    }
  }

}
