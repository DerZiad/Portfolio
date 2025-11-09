import { Component, AfterViewInit, OnDestroy, ViewChildren, ViewChild, QueryList, ElementRef, Renderer2, NgZone } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements AfterViewInit, OnDestroy {

  educations = [
    {
      id: 'bachelor',
      name: 'Bachelor - FH Aachen',
      years: '2024',
      field: "Bachelor's degree, Mathematics and computer science",
      logo: '/assets/img/logo/bachelor.png',
    },
    {
      id: 'fh',
      name: 'FH Aachen - Germany',
      years: '2022 - 2024',
      field: "Applied Mathematics and Computer Science (FB9)",
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
      id: 'umi',
      name: 'University Moulay Ismail Mèknes - Morocco',
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
    }
  ];

  @ViewChildren('itemRef', { read: ElementRef }) itemRefs!: QueryList<ElementRef>;
  @ViewChild('timelineCanvas', { read: ElementRef }) timelineCanvas?: ElementRef<HTMLCanvasElement>;

  private observer: IntersectionObserver | null = null;
  private itemsChangesSub?: Subscription;
  private resizeHandler = () => this.drawTimeline();
  private scrollHandler = () => this.drawTimeline();
  private loadHandler = () => this.drawTimeline();
  private orientationHandler = () => this.drawTimeline();

  private logoImageListeners = new Map<HTMLImageElement, () => void>();

  selectedEducation: any = null;
  modalOpen = false;
  currentSemesterIndex = 0;
  private prevFocusedElement: Element | null = null;

  private modalKeyHandler = (ev: KeyboardEvent) => {
    if (!this.modalOpen) return;
    if (ev.key === 'Escape') {
      ev.preventDefault();
      this.closeModal();
      return;
    }
    // Tab focus trap (simple)
    if (ev.key === 'Tab') {
      // basic focus trap so tab doesn't leave modal
      const modal = document.querySelector('.edu-modal') as HTMLElement | null;
      if (!modal) return;
      const focusable = Array.from(modal.querySelectorAll<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))
        .filter(el => !el.hasAttribute('disabled'));
      if (!focusable.length) return;
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (!ev.shiftKey && document.activeElement === last) {
        ev.preventDefault();
        (first as HTMLElement).focus();
      } else if (ev.shiftKey && document.activeElement === first) {
        ev.preventDefault();
        (last as HTMLElement).focus();
      }
    }
  };

  constructor(private renderer: Renderer2, private router: Router, private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    const setupObserver = () => {
      if (this.observer) return;
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            this.renderer.addClass(el, 'is-visible');
          }
        });
        this.drawTimeline();
      }, { threshold: 0.18 });
    };

    if (this.itemRefs && this.itemRefs.length) {
      setupObserver();
      this.itemRefs.forEach(ref => {
        if (ref && ref.nativeElement && this.observer) {
          this.observer.observe(ref.nativeElement);
        }
      });
    }

    this.itemsChangesSub = this.itemRefs.changes.subscribe((ql: QueryList<ElementRef>) => {
      setupObserver();
      ql.forEach(ref => {
        if (ref && ref.nativeElement && this.observer) {
          this.observer!.observe(ref.nativeElement);
        }
      });
      setTimeout(() => {
        this.drawTimeline();
        this.attachLogoImageListeners();
      }, 80);
    });

    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('resize', this.resizeHandler);
      window.addEventListener('scroll', this.scrollHandler, true);
      window.addEventListener('load', this.loadHandler);
      window.addEventListener('orientationchange', this.orientationHandler);
    });

    setTimeout(() => {
      this.drawTimeline();
      this.attachLogoImageListeners();
    }, 120);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    if (this.itemsChangesSub) {
      this.itemsChangesSub.unsubscribe();
      this.itemsChangesSub = undefined;
    }

    try {
      window.removeEventListener('resize', this.resizeHandler);
      window.removeEventListener('scroll', this.scrollHandler, true);
      window.removeEventListener('load', this.loadHandler);
      window.removeEventListener('orientationchange', this.orientationHandler);
    } catch {}

    try {
      document.removeEventListener('keydown', this.modalKeyHandler);
    } catch {}

    this.detachLogoImageListeners();

    document.body.style.overflow = 'auto';
  }

  onKeydown(event: KeyboardEvent, id: string, index: number) {
    const key = event.key;
    if (key === 'Enter' || key === ' ') {
      event.preventDefault();
      this.navigateTo(id);
      return;
    }
    const items = this.itemRefs ? this.itemRefs.toArray() : [];
    if (!items.length) return;

    if (key === 'ArrowDown' || key === 'ArrowRight') {
      event.preventDefault();
      const next = items[index + 1];
      if (next) {
        const focusable = next.nativeElement.querySelector('.timeline-card');
        (focusable || next.nativeElement).focus();
      }
      return;
    }
    if (key === 'ArrowUp' || key === 'ArrowLeft') {
      event.preventDefault();
      const prev = items[index - 1];
      if (prev) {
        const focusable = prev.nativeElement.querySelector('.timeline-card');
        (focusable || prev.nativeElement).focus();
      }
      return;
    }
  }

  navigateTo(id: string) {
    const edu = this.educations.find(e => e.id === id);
    if (edu && Array.isArray(edu.semesters) && edu.semesters.length) {
      this.openModal(id);
      return;
    }
    this.router.navigate(['/education', id]);
  }

  private attachLogoImageListeners() {
    this.detachLogoImageListeners();
    const items = this.itemRefs ? this.itemRefs.toArray() : [];
    items.forEach(ref => {
      const el = ref.nativeElement as HTMLElement;
      const imgs = Array.from(el.querySelectorAll('img')) as HTMLImageElement[];
      imgs.forEach(img => {
        if (!this.logoImageListeners.has(img)) {
          const handler = () => this.drawTimeline();
          img.addEventListener('load', handler);
          this.logoImageListeners.set(img, () => img.removeEventListener('load', handler));
        }
      });
    });
  }

  private detachLogoImageListeners() {
    this.logoImageListeners.forEach((remove, img) => {
      try { remove(); } catch {}
    });
    this.logoImageListeners.clear();
  }

  private drawTimeline(): void {
    const canvasEl = this.timelineCanvas && this.timelineCanvas.nativeElement;
    const listEl = document.querySelector('.timeline-list') as HTMLElement | null;
    if (!canvasEl || !listEl || !this.itemRefs) return;

    const listRect = listEl.getBoundingClientRect();
    const dpr = Math.max(1, window.devicePixelRatio || 1);

    const cssWidth = Math.max(200, listRect.width);
    const cssHeight = Math.max(200, listEl.scrollHeight || listRect.height);

    canvasEl.style.width = `${cssWidth}px`;
    canvasEl.style.height = `${cssHeight}px`;
    canvasEl.width = Math.round(cssWidth * dpr);
    canvasEl.height = Math.round(cssHeight * dpr);

    const ctx = canvasEl.getContext('2d');
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cssWidth, cssHeight);

    const items = this.itemRefs.toArray();
    if (!items.length) return;

    const centersY: number[] = [];
    let lineX: number | null = null;

    items.forEach(ref => {
      const el = ref.nativeElement as HTMLElement;
      const logoEl = el.querySelector('.card-logo') as HTMLElement | null;
      const target = logoEl || (el.querySelector('.card-content') as HTMLElement | null) || el;
      const r = target.getBoundingClientRect();
      const y = r.top - listRect.top + r.height / 2;
      centersY.push(y);
      if (lineX === null) {
        lineX = r.left - listRect.left + r.width / 2;
      }
    });

    if (lineX === null || !centersY.length) return;

    const minY = Math.max(8, Math.min(...centersY) - 6);
    const maxY = Math.min(cssHeight - 8, Math.max(...centersY) + 6);

    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#e6eef5';
    ctx.moveTo(lineX, minY);
    ctx.lineTo(lineX, maxY);
    ctx.stroke();

    centersY.forEach(cy => {
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255,255,255,0.95)';
      ctx.arc(lineX!, cy, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(0,0,0,0.05)';
      ctx.arc(lineX!, cy, 10, 0, Math.PI * 2);
      ctx.stroke();
    });
  }

  openModal(id: string) {
    const edu = this.educations.find(e => e.id === id);
    if (!edu) return;
    this.prevFocusedElement = document.activeElement;
    this.selectedEducation = edu;
    this.currentSemesterIndex = 0;
    this.modalOpen = true;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', this.modalKeyHandler);
    setTimeout(() => {
      const modal = document.querySelector('.edu-modal') as HTMLElement | null;
      if (modal) modal.focus();
      this.drawTimeline();
    }, 60);
  }

  closeModal() {
    this.modalOpen = false;
    this.selectedEducation = null;
    document.body.style.overflow = 'auto';
    document.removeEventListener('keydown', this.modalKeyHandler);
    try { (this.prevFocusedElement as HTMLElement)?.focus(); } catch {}
  }

  selectSemester(index: number) {
    this.currentSemesterIndex = index;
  }
}
