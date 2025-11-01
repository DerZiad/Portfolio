import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  cursor: string = "|";
  animatedText: string = "";
  phrases: string[] = ["Software Engineer"];
  currentPhraseIndex = 0;

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
      this.currentPhraseIndex = 0;
      this.timers.push(setTimeout(() => this.showWord(0), 300));
    } else {
      this.timers.push(setTimeout(() => this.hideWord(n), 60));
    }
  }
}
