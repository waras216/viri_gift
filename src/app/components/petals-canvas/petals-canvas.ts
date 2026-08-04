import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  PLATFORM_ID,
  afterNextRender,
  inject,
  viewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface Petal {
  x: number;
  y: number;
  size: number;
  speed: number;
  drift: number;
  angle: number;
  spin: number;
  hue: string;
  alpha: number;
}

@Component({
  selector: 'app-petals-canvas',
  templateUrl: './petals-canvas.html',
  styleUrl: './petals-canvas.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetalsCanvas {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);
  private readonly canvasRef = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');

  private petals: Petal[] = [];
  private time = 0;
  private frameId: number | null = null;

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) {
        return;
      }
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }
      this.start();
    });

    this.destroyRef.onDestroy(() => {
      if (this.frameId !== null) {
        cancelAnimationFrame(this.frameId);
      }
    });
  }

  private start(): void {
    const canvas = this.canvasRef().nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const makePetal = (): Petal => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: Math.random() * rect.width,
        y: -20 - Math.random() * 100,
        size: 5 + Math.random() * 7,
        speed: 0.35 + Math.random() * 0.5,
        drift: 0.4 + Math.random() * 0.6,
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.02,
        hue: Math.random() > 0.5 ? 'rgba(216,110,142,' : 'rgba(178,138,68,',
        alpha: 0.4 + Math.random() * 0.4,
      };
    };

    resize();
    window.addEventListener('resize', resize);
    this.destroyRef.onDestroy(() => window.removeEventListener('resize', resize));

    const count = window.innerWidth < 640 ? 10 : 18;
    for (let i = 0; i < count; i++) {
      const petal = makePetal();
      petal.y = Math.random() * 600;
      this.petals.push(petal);
    }

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      this.time += 0.016;

      for (const petal of this.petals) {
        petal.y += petal.speed;
        petal.x += Math.sin(this.time * petal.drift + petal.angle) * 0.6;
        petal.angle += petal.spin;
        if (petal.y > rect.height + 20) {
          Object.assign(petal, makePetal());
          petal.y = -20;
        }
        ctx.save();
        ctx.translate(petal.x, petal.y);
        ctx.rotate(petal.angle);
        ctx.fillStyle = petal.hue + petal.alpha + ')';
        ctx.beginPath();
        ctx.ellipse(0, 0, petal.size, petal.size * 0.6, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      this.frameId = requestAnimationFrame(draw);
    };

    this.frameId = requestAnimationFrame(draw);
  }
}
