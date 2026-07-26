import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';
import { LoadingService } from '../../loading.service';

/**
 * Full-bleed looping background video, shared by all pages.
 * Plays a single muted video on loop and fades it in once it can play.
 */
@Component({
  selector: 'app-video-background',
  templateUrl: './video-background.component.html',
  styleUrls: ['./video-background.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoBackgroundComponent implements AfterViewInit {

  @ViewChild('bgVideo') bgVideo?: ElementRef<HTMLVideoElement>;

  readonly currentVideoSrc = '/assets/videos/background_1.mp4';
  videoReady = false;

  constructor(
    private readonly cdr: ChangeDetectorRef,
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
