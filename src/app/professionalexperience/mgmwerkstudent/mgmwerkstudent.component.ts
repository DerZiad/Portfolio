import { Component, EventEmitter, Input, Output, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-mgmwerkstudent',
  templateUrl: './mgmwerkstudent.component.html',
  styleUrls: ['./mgmwerkstudent.component.css']
})
export class MgmwerkstudentComponent implements AfterViewInit, OnDestroy {
  @Input('data') data: any;
  @Output() closeAction = new EventEmitter<boolean>();

  readonly concepts: [string, number][] = [
    ['Applying my knowledge on a professional field', 5],
    ['Learning Kotlin and web programming using Spring Boot / Kotlin', 5],
    ['Learning programming workflows and process management by mgm', 5],
    ['Working in a team', 5],
    ['Exploring low-code platforms', 2],
    ['Applying informatics in a new branch', 4]
  ];

  readonly technologies: [string, number][] = [
    ['Java', 5],
    ['TypeScript', 4],
    ['Kotlin', 4],
    ['Spring Boot with Kotlin and Java', 5],
    ['Camunda', 4],
    ['A12', 3],
    ['JUnit 5', 4],
    ['Selenium', 4],
    ['Gradle', 2],
    ['Docker', 4],
    ['React TS', 2],
    ['Stripe API', 4],
    ['PayPal API', 4],
    ['Git', 5]
  ];

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
    this.windowWidth = this.windowWidth === 500 ? window.innerWidth : 500;
    element.style.maxWidth = this.windowWidth + 'px';
  }

  ngOnDestroy(): void {
    // clean-up if needed in future; left intentionally minimal
  }
}
