import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements AfterViewInit, OnDestroy {

  @ViewChild('bgVideo') bgVideo?: ElementRef<HTMLVideoElement>;

  private readonly backgroundVideos = [
    '/assets/videos/background.mp4',
    '/assets/videos/background_1.mp4',
    '/assets/videos/background_2.mp4',
    '/assets/videos/background_3.mp4'
  ];
  private currentVideoIndex = 0;
  currentVideoSrc = this.backgroundVideos[0];
  private timers: any[] = [];

  educations = [
    {
      id: 'umi',
      name: 'University Moulay Ismail',
      years: '2019 - 2022',
      field: 'Computer Software Engineering',
      logo: '/assets/img/logo/umi.jpg',
      semesters: [
        {
          name: 'Semester 1',
          modules: [
            'Linear Algebra 1',
            'Analysis 1',
            'Analysis 2',
            'Algorithms 1',
            'Java 1',
            'German A1'
          ],
          techStack: ['Java', 'Algorithms']
        },
        {
          name: 'Semester 2',
          modules: [
            'Linear Algebra 2',
            'Analysis 3',
            'Analysis 4',
            'Informatics Knowledge (Binary Calculation, Network 1, Boolean Algebra, Command Line Windows)',
            'Java 2',
            'German A2'
          ],
          techStack: [
            'Java',
            'Java Swing / FX',
            'Basic Networking Concepts',
            'Windows Command Line',
            'Python for Analysis'
          ]
        },
        {
          name: 'Semester 3',
          modules: [
            'Probability',
            'Numerical Analysis 1',
            'Numerical Analysis 1 - Python Practice',
            'Software Engineering 1 (Scrum Method and Software Development Cycle)',
            'Software Engineering 2 (UML)',
            'Database Oracle',
            'German B1'
          ],
          techStack: [
            'Python',
            'Django',
            'UML 2',
            'Scrum Methodology',
            'SQL / Databases (Oracle, MySQL)'
          ]
        },
        {
          name: 'Semester 4',
          modules: [
            'Statistics',
            'Statistics Practice Using R',
            'Numerical Analysis 2',
            'Numerical Analysis 2 - Python Practice',
            'Algorithms 2 Using C',
            'Web Development Using JEE / Deliberation Project',
            'German B2',
            'C++'
          ],
          techStack: [
            'Python',
            'Java (JEE / Spring Boot Basics)',
            'C / C++',
            'R (Statistics)',
            'Web Development (JSP / JSTL)'
          ]
        },
        {
          name: 'Semester 5',
          modules: [
            'Robotics',
            'Web Development Using Spring Boot / JEE',
            'Artificial Intelligence / Machine Learning / Deep Learning (Diabetic Project)',
            'Operating Systems / Shell Programming Using Linux',
            'Computer Architecture Using Assembly',
            'Networking (Java, C/C++)',
            'German C1'
          ],
          techStack: [
            'Spring Framework',
            'Maven',
            'Web Security',
            'Python (TensorFlow)',
            'C++ (Arduino)',
            'Java Sockets',
            'Network Theory (DNS, FTP, SSH, DHCP, IPv4, HTTPS, Apache2)',
            'Linux Commands / Shell Scripting',
            'Assembly',
            'Raspberry PI',
            'Kali Linux'
          ]
        }
      ]
    },
    {
      id: 'fh',
      name: 'FH Aachen',
      years: '2022 - 2024',
      field: 'Applied Mathematics and Computer Science (FB9)',
      logo: '/assets/img/logo/fh.png',
      semesters: [
        {
          name: 'Semester 6 (Integration Semester)',
          modules: [
            'Technical German Language',
            'Advanced Java Programming (Threads, Networking)',
            'Git',
            'Python'
          ],
          techStack: [
            'Java (Multithreading, Sockets)',
            'Git',
            'Python'
          ]
        },
        {
          name: 'Semester 7',
          modules: [
            'Machine Learning',
            'Parallel Programming using C/C++ and Java',
            'Technical Scientific Writing (LaTeX)',
            'Blockchain Technologies (Seminar: Bitcoin and Proof of Work Algorithm)',
            'Software Quality Management'
          ],
          techStack: [
            'Java',
            'C/C++ (OpenMP, MPI)',
            'LaTeX',
            'Python (Pandas, Numpy, Scikit-Learn)'
          ]
        },
        {
          name: 'Semester 8',
          modules: [
            'Data Science',
            'Praxis Project with Industry Partner',
            'Bachelor Thesis'
          ],
          techStack: [
            'Python (Pandas, Numpy, Scikit-Learn)',
            'Java',
            'Angular',
            'Spring Boot',
            'TypeScript',
            'Spring Circuit Breaker (Resilience4j)',
            'Apache Kafka',
            'Eureka Server',
            'Spring Cloud Config Server',
            'Spring Gateway',
            'Spring WebFlux'
          ]
        }
      ]
    },
    {
      id: 'bachelor',
      name: 'Bachelor & Job Start',
      years: '2024',
      field: "Bachelor's degree, Mathematics and Computer Science",
      logo: '/assets/img/logo/bachelor.png',
      semesters: []
    }
  ];

  selectedEducation: (typeof this.educations)[number] | null = null;
  currentSemesterIndex = 0;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.timers.push(setTimeout(() => {
      this.playVideo();
    }, 100));
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

    setTimeout(() => {
      this.playVideo();
    }, 100);
  }

  downloadFile(): void {
    this.http.get("/assets/pdf/CV_Ziad_Bougrine_EN.pdf", { responseType: 'blob' }).subscribe((response: Blob) => {
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(response);
      downloadLink.download = "CV_Ziad_Bougrine_EN.pdf";
      downloadLink.click();
      URL.revokeObjectURL(downloadLink.href);
    });
  }

  selectEducation(education: any): void {
    if (this.selectedEducation?.id === education.id) {
      this.closeEducation();
      return;
    }

    this.selectedEducation = education;
    this.currentSemesterIndex = 0;
  }

  selectSemester(index: number): void {
    this.currentSemesterIndex = index;
  }

  closeEducation(): void {
    this.selectedEducation = null;
    this.currentSemesterIndex = 0;
  }
}
