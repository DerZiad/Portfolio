import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * Tracks whether the initial page assets (background video) are ready.
 * Latches to `true` once ready — the app loader is only shown on first load.
 */
@Injectable({ providedIn: 'root' })
export class LoadingService {
  private readonly readySubject = new BehaviorSubject<boolean>(false);
  readonly ready$ = this.readySubject.asObservable();

  get isReady(): boolean {
    return this.readySubject.value;
  }

  markReady(): void {
    if (!this.readySubject.value) {
      this.readySubject.next(true);
    }
  }
}
