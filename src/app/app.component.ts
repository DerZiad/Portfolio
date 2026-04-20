import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate, query, group } from '@angular/animations';
import { Subscription } from 'rxjs';

const routeAnimations = trigger('routeAnimations', [
  transition('* => *', [
    query(':enter, :leave', [
      style({ position: 'absolute', top: 0, left: 0, width: '100%' })
    ], { optional: true }),
    query(':enter', style({ opacity: 0 }), { optional: true }),
    group([
      query(':leave', animate('160ms ease', style({ opacity: 0 })), { optional: true }),
      query(':enter', animate('360ms 100ms ease', style({ opacity: 1 })), { optional: true }),
    ])
  ])
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ziadbougrine';
  navbarOpen = false;

  private routerSub: Subscription | null = null;
  private outsideClickCleanup: (() => void) | null = null;

  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.routerSub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.closeNavbar();
        window.scrollTo(0, 0);
      }
    });
    this.outsideClickCleanup = this.renderer.listen('document', 'click', (e: Event) => {
      const nav = document.querySelector('.portfolio-navbar');
      if (this.navbarOpen && nav && !nav.contains(e.target as Node)) {
        this.closeNavbar();
      }
    });
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
    this.outsideClickCleanup?.();
  }

  isHomeRoute(): boolean {
    return this.router.url === '/';
  }

  toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }

  closeNavbar(): void {
    this.navbarOpen = false;
  }

  prepareRoute(outlet: RouterOutlet): string {
    return outlet?.activatedRouteData?.['animation'] ?? '';
  }
}
