import { Component, EventEmitter, Input, Output, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-mgmwerkstudent',
  templateUrl: './mgmwerkstudent.component.html',
  styleUrls: ['./mgmwerkstudent.component.css']
})
export class MgmwerkstudentComponent implements AfterViewInit, OnDestroy {
  @Input('data') data: any;
  @Output() closeAction = new EventEmitter<boolean>();

  private windowWidth = 500;

  constructor() { }

  // Emit the close event to parent and perform the swipe animation
  closeElement(): void {
    const element = document.getElementById('close');
    if (!element) { return; }

    element.classList.add('swipe-left-class');
    setTimeout(() => this.emitClose(), 300);
  }

  private emitClose(): void {
    this.closeAction.emit(false);
  }

  ngAfterViewInit(): void {
    this.extendTab();
  }

  extendTab(): void {
    const element = document.getElementById('close');
    if (!element) { return; }
    // Toggle between a compact fixed width and a responsive expanded width
    if (element.style.maxWidth === '' || element.style.maxWidth === '600px') {
      element.style.maxWidth = '95vw';
    } else {
      element.style.maxWidth = '600px';
    }
  }

  // Toggle chip selection state (updates aria-pressed for accessibility)
  toggleChip(event: Event): void {
    const btn = event.currentTarget as HTMLElement | null;
    if (!btn) { return; }
    const pressed = btn.getAttribute('aria-pressed') === 'true';
    btn.setAttribute('aria-pressed', (!pressed).toString());
  }

  ngOnDestroy(): void {
    // clean-up if needed in future; left intentionally minimal
  }
}
