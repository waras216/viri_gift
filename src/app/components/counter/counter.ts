import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  PLATFORM_ID,
  afterNextRender,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface Elapsed {
  years: string;
  months: string;
  days: string;
  seconds: string;
}

@Component({
  selector: 'app-counter',
  templateUrl: './counter.html',
  styleUrl: './counter.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Counter {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  readonly sinceDate = input.required<Date>();

  private readonly tick = signal(0);

  protected readonly elapsed = computed<Elapsed>(() => {
    this.tick();
    return this.computeElapsed(this.sinceDate());
  });

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) {
        return;
      }
      const intervalId = setInterval(() => this.tick.update((value) => value + 1), 1000);
      this.destroyRef.onDestroy(() => clearInterval(intervalId));
    });
  }

  private computeElapsed(start: Date): Elapsed {
    const now = new Date();
    const diffMs = Math.max(0, now.getTime() - start.getTime());

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    let days = now.getDate() - start.getDate();

    if (days < 0) {
      months -= 1;
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    const totalSeconds = Math.floor(diffMs / 1000);

    return {
      years: String(years).padStart(2, '0'),
      months: String(months).padStart(2, '0'),
      days: String(days).padStart(2, '0'),
      seconds: totalSeconds.toLocaleString('es-ES'),
    };
  }
}
