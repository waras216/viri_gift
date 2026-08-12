import {
  Directive,
  DestroyRef,
  ElementRef,
  PLATFORM_ID,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appRevealOnScroll]',
  host: {
    class: 'reveal',
    '[class.is-visible]': 'visible()',
  },
})
export class RevealOnScrollDirective {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly visible = signal(false);

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) {
        return;
      }

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        this.visible.set(true);
        return;
      }

      const element = this.elementRef.nativeElement;
      let cleanup: () => void = () => {};
      let ticking = false;

      // Chequeo manual por posición: respaldo en caso de que el
      // IntersectionObserver no dispare (visto en Chrome de escritorio con
      // scroll normal, se destrababa solo al forzar un resize).
      const checkPosition = () => {
        ticking = false;
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
          this.visible.set(true);
          cleanup();
        }
      };

      const requestCheck = () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(checkPosition);
        }
      };

      let observer: IntersectionObserver | null = null;
      if ('IntersectionObserver' in window) {
        observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                this.visible.set(true);
                cleanup();
              }
            }
          },
          { threshold: 0.15 },
        );
        observer.observe(element);
      }

      window.addEventListener('scroll', requestCheck, { passive: true });
      window.addEventListener('resize', requestCheck, { passive: true });

      cleanup = () => {
        observer?.disconnect();
        window.removeEventListener('scroll', requestCheck);
        window.removeEventListener('resize', requestCheck);
      };
      this.destroyRef.onDestroy(cleanup);

      requestCheck();
    });
  }
}
