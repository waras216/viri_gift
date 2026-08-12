import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  input,
  signal,
  viewChild,
} from '@angular/core';

export interface MilestonePhoto {
  src: string;
  alt: string;
}

export interface TimelineMilestone {
  date: string;
  title: string;
  description: string;
  photos?: readonly MilestonePhoto[];
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.html',
  styleUrl: './timeline.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Timeline {
  readonly milestones = input.required<readonly TimelineMilestone[]>();

  private readonly photoDialog = viewChild<ElementRef<HTMLDialogElement>>('photoDialog');
  protected readonly activePhotos = signal<readonly MilestonePhoto[]>([]);
  protected readonly activePhotoIndex = signal(0);
  protected readonly activePhoto = computed(
    () => this.activePhotos()[this.activePhotoIndex()] ?? null,
  );
  // El <img> se reutiliza entre fotos (solo cambia [src]): el navegador
  // sigue pintando la foto anterior hasta que la nueva termina de cargar.
  // Este signal oculta la imagen mientras carga para que nunca se vea la
  // anterior pegada -- se resetea en cada cambio de foto y se prende con
  // (load)/(error) del <img>.
  protected readonly photoLoaded = signal(false);

  protected openPhoto(milestone: TimelineMilestone): void {
    if (!milestone.photos?.length) {
      return;
    }
    this.activePhotos.set(milestone.photos);
    this.activePhotoIndex.set(0);
    this.photoLoaded.set(false);
    this.photoDialog()?.nativeElement.showModal();
  }

  protected closePhoto(): void {
    this.photoDialog()?.nativeElement.close();
  }

  protected nextPhoto(): void {
    const count = this.activePhotos().length;
    this.photoLoaded.set(false);
    this.activePhotoIndex.update((i) => (i + 1) % count);
  }

  protected prevPhoto(): void {
    const count = this.activePhotos().length;
    this.photoLoaded.set(false);
    this.activePhotoIndex.update((i) => (i - 1 + count) % count);
  }

  protected onPhotoSettled(): void {
    this.photoLoaded.set(true);
  }
}
