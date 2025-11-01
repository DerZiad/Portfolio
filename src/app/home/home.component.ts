import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  cursor: string = "|";                 // renamed from `console`
  animatedText: string = "";           // renamed from `console_animation`
  phrases: string[] = ["Full Stack Developer", "Software Engineer", "Open Source Enthusiast"];
  currentPhraseIndex = 0;

  @Output() childEvent = new EventEmitter<boolean>();
  @Output() goto = new EventEmitter<number>(); // emit page number to parent

  private timers: any[] = [];         // store timers so we can clear them on destroy

  constructor() { }

  ngOnInit(): void {
    // start blinking caret
    this.timers.push(setTimeout(() => this.toggleCaret(), 200));

    // start typewriter sequence shortly after load
    this.timers.push(setTimeout(() => this.showWord(0), 300));
  }

  ngOnDestroy(): void {
    // clear any pending timers to avoid leaks / unexpected behavior
    this.timers.forEach(t => clearTimeout(t));
    this.timers = [];
  }

  // Blink caret by toggling between '|' and empty
  private toggleCaret() {
    this.cursor = (this.cursor === "|") ? "" : "|";
    this.timers.push(setTimeout(() => this.toggleCaret(), 500));
  }

  // Typewriter: show characters one by one for current phrase
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

  // Typewriter: delete characters one by one
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

  // Smooth scroll helper for CTAs (used by contact and portfolio buttons)
  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // emit request to parent to show the Profile (page 2)
  navigateToProfile(event: Event) {
    event?.preventDefault();
    this.goto.emit(2);
  }
}
