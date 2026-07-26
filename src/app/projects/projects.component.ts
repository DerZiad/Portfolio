import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

interface Project {
  name: string;
  type: string;
  link: string;
  exist_on_github: boolean;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements OnInit {

  selectedTypeOfProject: string = "All"
  projectTypes: string[] = [];
  filteredProjects: Project[] = [];

  data = [
    {
      "name": "GNPT-ARP-Spoof-Visualizer",
      "type": "Security",
      "link": "https://github.com/DerZiad/GNPT-ARP-Spoof-Visualizer",
      "exist_on_github": true
    },
    {
      "name": "Portfolio",
      "type": "Web",
      "link": "https://github.com/DerZiad/Portfolio",
      "exist_on_github": true
    },
    {
      "name": "Sound Manager",
      "type": "AI",
      "link": "https://github.com/DerZiad/SoundManager",
      "exist_on_github": false
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
      "name": "E-Learning Platform",
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
      "name": "Diabetic Patients Classification Project",
      "type": "AI",
      "link": "https://github.com/DerZiad/AI-Based-Diabetic-Patient-Classification",
      "exist_on_github": true
    },
    {
      "name": "Line Tracker",
      "type": "Robotics",
      "link": "https://github.com/DerZiad/LineTracker",
      "exist_on_github": true
    },
    {
      "name": "Shell Auto Execute (Arduino Leonardo HID Emulator)",
      "type": "Security",
      "link": "https://github.com/DerZiad/HID-Script-Trigger",
      "exist_on_github": true
    },
    {
      "name": "Car Rental",
      "type": "Web",
      "link": "https://github.com/DerZiad/CarRental",
      "exist_on_github": true
    },
    {
      "name": "Virtual Mouse",
      "type": "AI",
      "link": "https://github.com/DerZiad/VirtualMouse",
      "exist_on_github": false
    },
    {
      "name": "Sound Manager",
      "type": "AI",
      "link": "https://github.com/DerZiad/SoundManager",
      "exist_on_github": false
    },
    {
      "name": "Deliberation",
      "type": "Web",
      "link": "https://github.com/DerZiad/Deliberation",
      "exist_on_github": true
    }
  ]

  ngOnInit(): void {
    const types = Array.from(new Set(
      this.data
        .filter(item => item.exist_on_github)
        .map(item => item.type)
        .filter(t => t.trim().length > 0)
    ));
    this.projectTypes = ['All', ...types];
    this.applyFilter();
  }

  goToLink(dataEntity: Project): void {
    document.location.replace(dataEntity.link)
  }

  openInNewTab(dataEntity: Project, event: Event): void {
    event.stopPropagation();
    if (!dataEntity || !dataEntity.link) return;
    window.open(dataEntity.link, '_blank', 'noopener');
  }

  selectType(type: string): void {
    this.selectedTypeOfProject = type;
    this.applyFilter();
  }

  trackByProject(_index: number, project: Project): string {
    return project.link;
  }

  /**
   * Computed once per filter change (not on every change-detection cycle).
   * Projects that do not exist on GitHub are always excluded.
   */
  private applyFilter(): void {
    this.filteredProjects = this.data.filter(p =>
      p.exist_on_github &&
      (this.selectedTypeOfProject === 'All' || p.type === this.selectedTypeOfProject)
    );
  }
}
