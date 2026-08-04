import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

export interface GalleryItem {
  caption: string;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
}

@Component({
  selector: 'app-gallery',
  imports: [NgOptimizedImage],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Gallery {
  readonly items = input.required<readonly GalleryItem[]>();
}
