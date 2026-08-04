import { Directive, ElementRef, PLATFORM_ID, afterNextRender, inject, signal } from '@angular/core';
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

  protected readonly visible = signal(false);

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) {
        return;
      }

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        this.visible.set(true);
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.visible.set(true);
              observer.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.15 },
      );
      observer.observe(this.elementRef.nativeElement);
    });
  }
}
