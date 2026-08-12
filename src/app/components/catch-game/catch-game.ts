import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';

type GameState = 'idle' | 'playing' | 'ended';

const HOLE_COUNT = 9;
const GAME_DURATION = 20;
const MOLE_VISIBLE_MS = 750;
const RESPAWN_DELAY_MS = 220;

@Component({
  selector: 'app-catch-game',
  templateUrl: './catch-game.html',
  styleUrl: './catch-game.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatchGame {
  private readonly destroyRef = inject(DestroyRef);

  protected readonly holes = Array.from({ length: HOLE_COUNT }, (_, i) => i);
  protected readonly gameState = signal<GameState>('idle');
  protected readonly activeHole = signal<number | null>(null);
  protected readonly score = signal(0);
  protected readonly timeLeft = signal(GAME_DURATION);

  private moleTimer: ReturnType<typeof setTimeout> | null = null;
  private countdownTimer: ReturnType<typeof setInterval> | null = null;

  constructor() {
    this.destroyRef.onDestroy(() => this.clearTimers());
  }

  protected startGame(): void {
    this.clearTimers();
    this.score.set(0);
    this.timeLeft.set(GAME_DURATION);
    this.gameState.set('playing');
    this.spawnMole();

    this.countdownTimer = setInterval(() => {
      this.timeLeft.update((t) => t - 1);
      if (this.timeLeft() <= 0) {
        this.endGame();
      }
    }, 1000);
  }

  protected catchMole(hole: number): void {
    if (this.gameState() !== 'playing' || this.activeHole() !== hole) {
      return;
    }
    this.score.update((s) => s + 1);
    this.activeHole.set(null);
    if (this.moleTimer) {
      clearTimeout(this.moleTimer);
    }
    this.moleTimer = setTimeout(() => this.spawnMole(), RESPAWN_DELAY_MS);
  }

  protected get resultMessage(): string {
    return 'Cachetes te ama igual que yo te amoo, pequeña. 🐾';
  }

  private spawnMole(): void {
    if (this.gameState() !== 'playing') {
      return;
    }
    const hole = Math.floor(Math.random() * HOLE_COUNT);
    this.activeHole.set(hole);

    this.moleTimer = setTimeout(() => {
      this.activeHole.set(null);
      this.moleTimer = setTimeout(() => this.spawnMole(), RESPAWN_DELAY_MS);
    }, MOLE_VISIBLE_MS);
  }

  private endGame(): void {
    this.gameState.set('ended');
    this.activeHole.set(null);
    this.clearTimers();
  }

  private clearTimers(): void {
    if (this.moleTimer) {
      clearTimeout(this.moleTimer);
      this.moleTimer = null;
    }
    if (this.countdownTimer) {
      clearInterval(this.countdownTimer);
      this.countdownTimer = null;
    }
  }
}
