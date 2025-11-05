import { AfterViewInit, Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'ziadbougrine';

  // intro overlay state
  introVisible = true;
  introIndex = 0;
  readonly introStepsCount = 5;

  // navbar state
  navbarExpanded = false;

  private documentClickListener: (() => void) | null = null;
  private documentTouchListener: (() => void) | null = null;
  private collapseObserver: MutationObserver | null = null;
  private introTimer: any = null;

  private readonly INTRO_SEEN_KEY = 'introSeen';

  constructor(private renderer: Renderer2, private router: Router) { }

  ngOnInit(): void {
    const seen = localStorage.getItem(this.INTRO_SEEN_KEY);
    if (seen === 'true') {
      this.introVisible = false;
      this.introIndex = this.introStepsCount;
      return;
    }
    this.startIntroSequence();
  }

  ngAfterViewInit(): void {
    // listen for clicks/touches on the whole document to detect outside clicks
    this.documentClickListener = this.renderer.listen('document', 'click', (event: Event) => this.handleOutsideClick(event));
    this.documentTouchListener = this.renderer.listen('document', 'touchstart', (event: Event) => this.handleOutsideClick(event));

    // observe collapse element to mirror its "show" state into the navbar root
    const collapseEl = document.querySelector('.collapse.navbar-collapse');
    const navbarRoot = document.querySelector('.portfolio-navbar');
    if (collapseEl && navbarRoot) {
      this.navbarExpanded = (collapseEl as Element).classList.contains('show');
      this.collapseObserver = new MutationObserver(() => {
        this.navbarExpanded = (collapseEl as Element).classList.contains('show');
        navbarRoot.classList.toggle('menu-open', this.navbarExpanded);
      });
      this.collapseObserver.observe(collapseEl, { attributes: true, attributeFilter: ['class'] });
    }
  }

  ngOnDestroy(): void {
    if (this.documentClickListener) { this.documentClickListener(); this.documentClickListener = null; }
    if (this.documentTouchListener) { this.documentTouchListener(); this.documentTouchListener = null; }
    if (this.collapseObserver) { this.collapseObserver.disconnect(); this.collapseObserver = null; }
    if (this.introTimer) { clearTimeout(this.introTimer); this.introTimer = null; }
  }

  get_background(): string {
    return this.introVisible ? "black-background" : "linear-gradient";
  }

  skipIntro(): void {
    this.markIntroSeen();
    this.finishIntro();
    this.router.navigate(['/']);
  }

  private startIntroSequence(): void {
    this.introIndex = 0;
    this.advanceIntro();
  }

  private advanceIntro(): void {
    if (this.introIndex < this.introStepsCount) {
      this.introTimer = setTimeout(() => {
        this.introIndex++;
        this.advanceIntro();
      }, 3000);
    } else {
      this.finishIntro();
    }
  }

  private finishIntro(): void {
    if (this.introTimer) { clearTimeout(this.introTimer); this.introTimer = null; }
    this.introVisible = false;
    this.markIntroSeen();
  }

  private markIntroSeen(): void {
    try {
      localStorage.setItem(this.INTRO_SEEN_KEY, 'true');
    } catch {
      // ignore storage errors
    }
  }

  private handleOutsideClick(event: Event): void {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarRoot = document.querySelector('.navbar');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      if (navbarRoot && !navbarRoot.contains(event.target as Node)) {
        this.closeNavbar();
      }
    }
  }

  toggleNavbar(): void {
    this.navbarExpanded = !this.navbarExpanded;
    const navbarRoot = document.querySelector('.portfolio-navbar');
    if (navbarRoot) {
      navbarRoot.classList.toggle('menu-open', this.navbarExpanded);
    }
    const collapseEl = document.querySelector('.collapse.navbar-collapse');
    if (collapseEl) {
      collapseEl.classList.toggle('show', this.navbarExpanded);
    }
    const toggler = document.querySelector('.navbar-toggler') as HTMLElement | null;
    if (toggler) {
      toggler.setAttribute('aria-expanded', String(this.navbarExpanded));
    }
  }

  closeNavbar(): void {
    this.navbarExpanded = false;
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar && navbar.classList.contains('show')) { navbar.classList.remove('show'); }
    const toggler = document.querySelector('.navbar-toggler') as HTMLElement | null;
    if (toggler) { toggler.setAttribute('aria-expanded', 'false'); }
    const navbarRoot = document.querySelector('.portfolio-navbar');
    if (navbarRoot) { navbarRoot.classList.remove('menu-open'); }
  }
}
