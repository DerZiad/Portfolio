import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { routes } from './Routes';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let router: Router;
  let compiled: HTMLElement;

  beforeEach(async () => {
    // ensure any persisted intro flag doesn't interfere with tests
    try { localStorage.removeItem('introSeen'); } catch {}

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [AppComponent]
    }).compileComponents();

    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the expected title`, () => {
    expect(component.title).toBe('ziadbougrine');
  });

  it('should start with intro visible when no persisted flag', () => {
    expect(component.introVisible).toBeTrue();
  });

  it('should skip intro when persisted flag is present', () => {
    // set flag before creating component to simulate returning visitor
    try { localStorage.setItem('introSeen', 'true'); } catch {}
    const fixture2 = TestBed.createComponent(AppComponent);
    const comp2 = fixture2.componentInstance;
    expect(comp2.introVisible).toBeFalse();
  });

  it('skipIntro should finish intro and navigate to root', fakeAsync(() => {
    const navSpy = spyOn(router, 'navigate');
    component.skipIntro();
    tick();
    expect(navSpy).toHaveBeenCalledWith(['/']);
    expect(component.introVisible).toBeFalse();
    expect(localStorage.getItem('introSeen')).toBe('true');
  }));

  it('toggleNavbar should toggle navbarExpanded and set aria-expanded on toggler', () => {
    fixture.detectChanges();
    const toggler = compiled.querySelector('.navbar-toggler') as HTMLElement | null;
    expect(component.navbarExpanded).toBeFalse();
    component.toggleNavbar();
    fixture.detectChanges();
    expect(component.navbarExpanded).toBeTrue();
    if (toggler) {
      expect(toggler.getAttribute('aria-expanded')).toBe('true');
    }
    component.toggleNavbar();
    fixture.detectChanges();
    expect(component.navbarExpanded).toBeFalse();
    if (toggler) {
      expect(toggler.getAttribute('aria-expanded')).toBe('false');
    }
  });

  it('closeNavbar should clear expanded state and remove "show" from collapse', () => {
    fixture.detectChanges();
    const collapseEl = compiled.querySelector('.navbar-collapse') as HTMLElement | null;
    if (collapseEl) {
      collapseEl.classList.add('show');
    }
    component.navbarExpanded = true;
    fixture.detectChanges();
    component.closeNavbar();
    fixture.detectChanges();
    expect(component.navbarExpanded).toBeFalse();
    if (collapseEl) {
      expect(collapseEl.classList.contains('show')).toBeFalse();
    }
  });
});
