import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  cursor: string = "|";
  animatedText: string = "";
  phrases: string[] = ["Full Stack Developer", "Software Engineer", "Open Source Enthusiast"];
  currentPhraseIndex = 0;

  @Output() childEvent = new EventEmitter<boolean>();
  @Output() goto = new EventEmitter<number>();

  private timers: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.timers.push(setTimeout(() => this.toggleCaret(), 200));
    this.timers.push(setTimeout(() => this.showWord(0), 300));
  }

  ngOnDestroy(): void {
    this.timers.forEach(t => clearTimeout(t));
    this.timers = [];
  }

  private toggleCaret() {
    this.cursor = (this.cursor === "|") ? "" : "|";
    this.timers.push(setTimeout(() => this.toggleCaret(), 500));
  }

  showWord(n: number) {
    const current = this.phrases[this.currentPhraseIndex];
    this.animatedText = current.substring(0, n);
    n++;
    if (n > current.length) {
      // after full word shown, hold then start deleting
      this.timers.push(setTimeout(() => this.hideWord(current.length), 2000));
    } else {
      this.timers.push(setTimeout(() => this.showWord(n), 100));
    }
  }

  hideWord(n: number) {
    const current = this.phrases[this.currentPhraseIndex];
    this.animatedText = current.substring(0, n);
    n--;
    if (n < 0) {
      // move to next phrase
      this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
      this.timers.push(setTimeout(() => this.showWord(0), 300));
    } else {
      this.timers.push(setTimeout(() => this.hideWord(n), 60));
    }
  }

  navigateToProfile(event: Event) {
    event?.preventDefault();
    this.goto.emit(2);
  }
}
