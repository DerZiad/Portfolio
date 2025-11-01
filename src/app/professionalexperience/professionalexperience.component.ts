import {Component} from '@angular/core';

@Component({
  selector: 'app-professionalexperience',
  templateUrl: './professionalexperience.component.html',
  styleUrls: ['./professionalexperience.component.css']
})
export class ProfessionalexperienceComponent {
  showData: boolean[] = [false, false]

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
    switch (dataEntity) {
      case "fhwerkstudent":
        this.showData[0] = true
        break
      case "mgmwerkstudent":
        this.showData[1] = true
        break
    }
  }


  onChildCloseChanged(university: string, close: boolean) {
    switch (university) {
      case "fhwerkstudent":
        this.showData[0] = close
        break
      case "mgmwerkstudent":
        this.showData[1] = close
        break
    }
  }
}
