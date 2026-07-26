import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { LoadingService } from '../../loading.service';

/**
 * Full-bleed looping background video, shared by all pages.
 * Picks a random video, fades it in once it can play, and cycles
 * to the next one when the current video ends.
 */
@Component({
  selector: 'app-video-background',
  templateUrl: './video-background.component.html',
  styleUrls: ['./video-background.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoBackgroundComponent implements AfterViewInit, OnDestroy {

  @ViewChild('bgVideo') bgVideo?: ElementRef<HTMLVideoElement>;

  private readonly backgroundVideos = [
    '/assets/videos/background.mp4',
    '/assets/videos/background_1.mp4',
    '/assets/videos/background_2.mp4',
    '/assets/videos/background_3.mp4'
  ];

  private currentVideoIndex = Math.floor(Math.random() * this.backgroundVideos.length);
  currentVideoSrc = this.backgroundVideos[this.currentVideoIndex];
  videoReady = false;

  private timers: ReturnType<typeof setTimeout>[] = [];

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly zone: NgZone,
    private readonly loading: LoadingService
  ) {}

  ngAfterViewInit(): void {
    // Browsers only allow autoplay for muted video. The `muted` attribute in
    // the template is not reliably reflected onto the DOM property by the
    // time playback starts, so set it explicitly before calling play().
    const videoEl = this.bgVideo?.nativeElement;
    if (videoEl) {
      videoEl.muted = true;
      videoEl.defaultMuted = true;
    }
    this.playVideo();
  }

  ngOnDestroy(): void {
    this.timers.forEach(t => clearTimeout(t));
    this.timers = [];
  }

  onVideoCanPlay(): void {
    if (!this.videoReady) {
      this.videoReady = true;
      this.cdr.markForCheck();
      this.loading.markReady();
      // In case the initial play() was rejected (no user gesture yet),
      // try again now that the video is muted and buffered.
      this.playVideo();
    }
  }

  onVideoError(): void {
    // Video failed to load — release the app loader anyway.
    this.loading.markReady();
  }

  onVideoEnded(): void {
    this.currentVideoIndex = (this.currentVideoIndex + 1) % this.backgroundVideos.length;
    this.currentVideoSrc = this.backgroundVideos[this.currentVideoIndex];
    this.cdr.markForCheck();
    this.zone.runOutsideAngular(() => {
      this.timers.push(setTimeout(() => this.playVideo(), 60));
    });
  }

  private playVideo(): void {
    const videoEl = this.bgVideo?.nativeElement;
    if (!videoEl) {
      return;
    }
    videoEl.muted = true;
    const playPromise = videoEl.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => this.loading.markReady());
    }
  }
}
