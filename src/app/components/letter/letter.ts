import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  PLATFORM_ID,
  inject,
  input,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

type LetterState = 'closed' | 'opening' | 'kissing' | 'open';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.html',
  styleUrl: './letter.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Letter {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  readonly paragraphs = input.required<readonly string[]>();
  readonly signatureLine = input.required<string>();
  readonly signatureName = input.required<string>();

  protected readonly state = signal<LetterState>('closed');

  protected open(): void {
    if (this.state() !== 'closed') {
      return;
    }

    const prefersReducedMotion =
      isPlatformBrowser(this.platformId) &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      this.state.set('open');
      return;
    }

    this.state.set('opening');

    const kissTimer = setTimeout(() => this.state.set('kissing'), 500);
    const openTimer = setTimeout(() => this.state.set('open'), 2200);

    this.destroyRef.onDestroy(() => {
      clearTimeout(kissTimer);
      clearTimeout(openTimer);
    });
  }
}
