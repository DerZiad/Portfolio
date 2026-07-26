import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  NgZone,
  OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {

  cursor = '|';
  animatedText = '';
  introComplete = false;
  phrases = ['Software Engineer', 'Full-Stack Developer', 'Problem Solver', 'Tech Enthusiast'];
  currentPhraseIndex = 0;

  private timers: ReturnType<typeof setTimeout>[] = [];

  constructor(
    private readonly zone: NgZone,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // The typewriter ticks every 55–95ms. Running the timers outside the
    // Angular zone keeps them from triggering app-wide change detection;
    // we refresh only this component's view on each tick.
    this.zone.runOutsideAngular(() => {
      this.schedule(() => this.toggleCaret(), 200);
      this.schedule(() => this.showWord(0), 400);
    });
  }

  ngOnDestroy(): void {
    this.timers.forEach(t => clearTimeout(t));
    this.timers = [];
  }

  private schedule(fn: () => void, delay: number): void {
    this.timers.push(setTimeout(fn, delay));
  }

  private toggleCaret(): void {
    this.cursor = this.cursor === '|' ? '' : '|';
    this.cdr.detectChanges();
    this.schedule(() => this.toggleCaret(), 520);
  }

  private showWord(n: number): void {
    const current = this.phrases[this.currentPhraseIndex];
    this.animatedText = current.substring(0, n);
    if (++n > current.length) {
      this.introComplete = true;
      this.schedule(() => this.hideWord(current.length), 2200);
    } else {
      this.schedule(() => this.showWord(n), 95);
    }
    this.cdr.detectChanges();
  }

  private hideWord(n: number): void {
    const current = this.phrases[this.currentPhraseIndex];
    this.animatedText = current.substring(0, n);
    if (--n < 0) {
      this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
      this.schedule(() => this.showWord(0), 320);
    } else {
      this.schedule(() => this.hideWord(n), 55);
    }
    this.cdr.detectChanges();
  }
}
