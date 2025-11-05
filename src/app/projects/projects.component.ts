import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  selectedTypeOfProject: string = "All"
  projectTypes: string[] = [];

  data = [
    {
      "name": "Sound Manager",
      "type": "AI",
      "link": "https://github.com/DerZiad/SoundManager",
      "exist_on_github": true
    },
    {
      "name": "Pentest Me",
      "type": "Security",
      "link": "https://github.com/DerZiad/PentestMe",
      "exist_on_github": true
    },
    {
      "name": "CVE-2022-30190",
      "type": "Security",
      "link": "https://github.com/DerZiad/CVE-2022-30190",
      "exist_on_github": true
    },
    {
      "name": "E-Learning",
      "type": "Web",
      "link": "https://github.com/DerZiad/elearning",
      "exist_on_github": true
    },
    {
      "name": "Travel Agency",
      "type": "Web",
      "link": "https://github.com/DerZiad/TravelAgency",
      "exist_on_github": true
    },
    {
      "name": "Study Paper of diabetics",
      "type": "AI",
      "link": "https://github.com/DerZiad/Diabetic",
      "exist_on_github": true
    },
    {
      "name": "Line Tracker",
      "type": "Robotics",
      "link": "https://github.com/DerZiad/LineTrackerArduino",
      "exist_on_github": true
    },
    {
      "name": "Rubber Ducky Using Arduino",
      "type": "Security",
      "link": "https://github.com/DerZiad/ShellAutoExecuteUSB",
      "exist_on_github": true
    },
    {
      "name": "Car Location Website",
      "type": "Web",
      "link": "https://github.com/DerZiad/CarLocationWebsite",
      "exist_on_github": true
    },
    {
      "name": "Virtual Mouse",
      "type": "AI",
      "link": "https://github.com/DerZiad/VirtualMouse",
      "exist_on_github": true
    },
    {
      "name": "Sound Manager",
      "type": "AI",
      "link": "https://github.com/DerZiad/SoundManager",
      "exist_on_github": true
    },
    {
      "name": "Deliberation",
      "type": "Web",
      "link": "https://github.com/DerZiad/Deliberation",
      "exist_on_github": true
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
    const types = Array.from(new Set(this.data
      .map(item => item.type)
      .filter(t => typeof t === 'string' && t.trim().length > 0)
    ));
    this.projectTypes = ['All', ...types];
  }

  goToLink(dataEntity: any): void {
    document.location.replace(dataEntity.link)
  }

  openInNewTab(dataEntity: any, event: Event): void {
    event.stopPropagation();
    if (!dataEntity || !dataEntity.link) return;
    window.open(dataEntity.link, '_blank', 'noopener');
  }

  selectType(type: string): void {
    this.selectedTypeOfProject = type;
  }

  filter(dict: any) {
    if (!Array.isArray(dict)) return [];
    if (this.selectedTypeOfProject === 'All') return dict;
    return dict.filter((element: any) => element.type === this.selectedTypeOfProject)
  }
}
