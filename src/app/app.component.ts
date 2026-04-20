import { AfterViewInit, Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'ziadbougrine';

  navbarExpanded = false;

  private documentClickListener: (() => void) | null = null;
  private documentTouchListener: (() => void) | null = null;
  private collapseObserver: MutationObserver | null = null;
  private routerEventsSubscription: Subscription | null = null;

  constructor(private renderer: Renderer2, private router: Router) { }

  ngOnInit(): void {
    this.routerEventsSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.closeNavbar();
      }
    });
  }

  ngAfterViewInit(): void {
    this.documentClickListener = this.renderer.listen('document', 'click', (event: Event) => this.handleOutsideClick(event));
    this.documentTouchListener = this.renderer.listen('document', 'touchstart', (event: Event) => this.handleOutsideClick(event));

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
    if (this.routerEventsSubscription) { this.routerEventsSubscription.unsubscribe(); this.routerEventsSubscription = null; }
  }

  isHomeRoute(): boolean {
    return this.router.url === '/';
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
