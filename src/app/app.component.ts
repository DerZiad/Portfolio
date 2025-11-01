import { AfterViewInit, Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'ziadbougrine';

  hidden = true;

  first_name: string = "";
  email: string = "";
  phone: string = "";
  duringThread: boolean = true;

  active_page_number: number = 1;
  position = 0;
  number_of_elements: number = 5;

  // new: control collapse state via Angular
  navbarExpanded: boolean = false;

  private documentClickListener: (() => void) | null = null;
  private documentTouchListener: (() => void) | null = null;
  private collapseObserver: MutationObserver | null = null;

  constructor(private http: HttpClient, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.changePosition(0);
  }

  ngAfterViewInit(): void {
    // listen for clicks/touches on the whole document to detect outside clicks
    this.documentClickListener = this.renderer.listen('document', 'click', (event: Event) => {
      this.handleOutsideClick(event);
    });
    this.documentTouchListener = this.renderer.listen('document', 'touchstart', (event: Event) => {
      this.handleOutsideClick(event);
    });

    // observe the collapse element to toggle a "menu-open" class on the navbar when the menu is shown
    const collapseEl = document.querySelector('.collapse.navbar-collapse');
    const navbarRoot = document.querySelector('.portfolio-navbar');
    if (collapseEl && navbarRoot) {
      // set initial state based on DOM (helps if server-rendered or bootstrap left state)
      if ((collapseEl as Element).classList.contains('show')) {
        navbarRoot.classList.add('menu-open');
        this.navbarExpanded = true;
      } else {
        navbarRoot.classList.remove('menu-open');
        this.navbarExpanded = false;
      }

      this.collapseObserver = new MutationObserver(() => {
        if ((collapseEl as Element).classList.contains('show')) {
          navbarRoot.classList.add('menu-open');
          this.navbarExpanded = true;
        } else {
          navbarRoot.classList.remove('menu-open');
          this.navbarExpanded = false;
        }
      });
      this.collapseObserver.observe(collapseEl, { attributes: true, attributeFilter: ['class'] });
    }
  }

  ngOnDestroy(): void {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
    if (this.documentTouchListener) {
      this.documentTouchListener();
      this.documentTouchListener = null;
    }
    if (this.collapseObserver) {
      this.collapseObserver.disconnect();
      this.collapseObserver = null;
    }
  }

  handleCustomEvent(message: boolean) {
    this.hidden = message;
  }

  get_background(): String {
    return this.hidden ? "black-background" : "linear-gradient";
  }

  show(shadow: number) {
    this.active_page_number = shadow;
  }

  isActive(shadow: number): String {
    return shadow == this.active_page_number ? "active active-header" : "";
  }

  skipIntro() {
    this.hidden = false;
  }

  changePosition(position: number) {
    if (position < this.number_of_elements) {
      setTimeout(() => {
        this.changePosition(++this.position);
      }, 3000); // adjusted from 2400 -> 3000 to match slightly slower fade timings
    } else {
      this.hidden = false;
    }
  }

  show_me(): boolean {
    return this.position == this.number_of_elements;
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

  // new: Toggle handler used by the template
  toggleNavbar(): void {
    this.navbarExpanded = !this.navbarExpanded;
    const navbarRoot = document.querySelector('.portfolio-navbar');
    if (navbarRoot) {
      navbarRoot.classList.toggle('menu-open', this.navbarExpanded);
    }
    // Keep DOM class in sync for any third-party CSS that checks .show
    const collapseEl = document.querySelector('.collapse.navbar-collapse');
    if (collapseEl) {
      if (this.navbarExpanded) {
        collapseEl.classList.add('show');
      } else {
        collapseEl.classList.remove('show');
      }
    }
  }

  closeNavbar(): void {
    // ensure Angular state reflects closed panel
    this.navbarExpanded = false;

    const navbar = document.querySelector('.navbar-collapse');
    if (navbar != null && navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
    const toggler = document.querySelector('.navbar-toggler') as HTMLElement | null;
    if (toggler != null) {
      toggler.setAttribute('aria-expanded', 'false');
    }
    const navbarRoot = document.querySelector('.portfolio-navbar');
    if (navbarRoot) {
      navbarRoot.classList.remove('menu-open');
    }
  }
}
