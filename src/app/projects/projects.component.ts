import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('bgVideo') bgVideo?: ElementRef<HTMLVideoElement>;

  private readonly backgroundVideos = [
    '/assets/videos/background.mp4',
    '/assets/videos/background_1.mp4',
    '/assets/videos/background_2.mp4',
    '/assets/videos/background_3.mp4'
  ];
  private currentVideoIndex = Math.floor(Math.random() * 4);
  currentVideoSrc = this.backgroundVideos[this.currentVideoIndex];
  private timers: ReturnType<typeof setTimeout>[] = [];

  selectedTypeOfProject: string = "All"
  projectTypes: string[] = [];

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

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.timers.push(setTimeout(() => this.playVideo(), 100));
  }

  ngOnDestroy(): void {
    this.timers.forEach(t => clearTimeout(t));
    this.timers = [];
  }

  private playVideo(): void {
    if (this.bgVideo?.nativeElement) {
      const videoEl = this.bgVideo.nativeElement;
      videoEl.currentTime = 0;
      const playPromise = videoEl.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => console.log('Video autoplay prevented:', err));
      }
    }
  }

  onVideoEnded(): void {
    this.currentVideoIndex = (this.currentVideoIndex + 1) % this.backgroundVideos.length;
    this.currentVideoSrc = this.backgroundVideos[this.currentVideoIndex];
    this.cdr.detectChanges();
    this.timers.push(setTimeout(() => this.playVideo(), 100));
  }

  ngOnInit(): void {
    const types = Array.from(new Set(
      this.data
        .filter(item => item.exist_on_github)
        .map(item => item.type)
        .filter(t => t.trim().length > 0)
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
    // always exclude projects that do not exist on GitHub
    if (this.selectedTypeOfProject === 'All') return dict.filter((element: any) => element.exist_on_github);
    return dict.filter((element: any) => element.type === this.selectedTypeOfProject && element.exist_on_github)
  }
}
