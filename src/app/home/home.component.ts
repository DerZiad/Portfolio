import { Component, OnInit, AfterViewInit, OnDestroy, HostListener, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('bgVideo') bgVideo?: ElementRef<HTMLVideoElement>;

  cursor = '|';
  animatedText = '';
  introComplete = false;
  phrases = ['Software Engineer', 'Full-Stack Developer', 'Problem Solver', 'Tech Enthusiast'];
  currentPhraseIndex = 0;
  scrollY = 0;

  videoReady = false;

  private readonly backgroundVideos = [
    '/assets/videos/background.mp4',
    '/assets/videos/background_1.mp4',
    '/assets/videos/background_2.mp4',
    '/assets/videos/background_3.mp4'
  ];
  private currentVideoIndex = Math.floor(Math.random() * 4);
  currentVideoSrc = this.backgroundVideos[this.currentVideoIndex];

  private timers: any[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  @HostListener('window:scroll')
  onScroll() {
    this.scrollY = window.scrollY;
  }

  get portraitTransform(): string {
    return `translateY(${this.scrollY * -0.12}px)`;
  }

  ngOnInit(): void {
    this.timers.push(setTimeout(() => this.toggleCaret(), 200));
    this.timers.push(setTimeout(() => this.showWord(0), 400));
  }

  ngAfterViewInit(): void {
    // Play video after view is fully initialized
    this.timers.push(setTimeout(() => {
      this.playVideo();
    }, 100));
  }

  private playVideo(): void {
    if (this.bgVideo?.nativeElement) {
      const videoEl = this.bgVideo.nativeElement;
      videoEl.currentTime = 0;
      const playPromise = videoEl.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => console.log('Video autoplay prevented:', err));
      }
    }
  }

  ngOnDestroy(): void {
    this.timers.forEach(t => clearTimeout(t));
    this.timers = [];
  }

  private toggleCaret() {
    this.cursor = this.cursor === '|' ? '' : '|';
    this.timers.push(setTimeout(() => this.toggleCaret(), 520));
  }

  showWord(n: number) {
    const current = this.phrases[this.currentPhraseIndex];
    this.animatedText = current.substring(0, n);
    if (++n > current.length) {
      // First phrase fully typed → intro is done, stop red dot blinking
      this.onIntroComplete();
      this.timers.push(setTimeout(() => this.hideWord(current.length), 2200));
    } else {
      this.timers.push(setTimeout(() => this.showWord(n), 95));
    }
  }

  hideWord(n: number) {
    const current = this.phrases[this.currentPhraseIndex];
    this.animatedText = current.substring(0, n);
    if (--n < 0) {
      this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
      this.timers.push(setTimeout(() => this.showWord(0), 320));
    } else {
      this.timers.push(setTimeout(() => this.hideWord(n), 55));
    }
  }

  onIntroComplete() {
    // Intro removed - this method is kept for reference but no longer needed
  }

  onVideoCanPlay() {
    this.videoReady = true;
  }

  onVideoEnded() {
    this.currentVideoIndex = (this.currentVideoIndex + 1) % this.backgroundVideos.length;
    this.currentVideoSrc = this.backgroundVideos[this.currentVideoIndex];
    this.cdr.detectChanges();

    // Play the next video after a small delay to ensure it's loaded
    setTimeout(() => {
      this.playVideo();
    }, 100);
  }
}
