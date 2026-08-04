import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Counter } from './components/counter/counter';
import { Letter } from './components/letter/letter';
import { Gallery } from './components/gallery/gallery';
import { Timeline } from './components/timeline/timeline';
import { Playlist } from './components/playlist/playlist';
import { Closing } from './components/closing/closing';
import { RevealOnScrollDirective } from './directives/reveal-on-scroll.directive';
import {
  GALLERY_ITEMS,
  LETTER_PARAGRAPHS,
  LETTER_SIGNATURE_LINE,
  LETTER_SIGNATURE_NAME,
  PARTNER_NAMES,
  SINCE_DATE,
  SINCE_DATE_LABEL,
  TIMELINE_MILESTONES,
} from './anniversary-data';

@Component({
  selector: 'app-root',
  imports: [Hero, Counter, Letter, Gallery, Timeline, Playlist, Closing, RevealOnScrollDirective],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly partnerNames = PARTNER_NAMES;
  protected readonly sinceDate = SINCE_DATE;
  protected readonly sinceDateLabel = SINCE_DATE_LABEL;
  protected readonly letterParagraphs = LETTER_PARAGRAPHS;
  protected readonly letterSignatureLine = LETTER_SIGNATURE_LINE;
  protected readonly letterSignatureName = LETTER_SIGNATURE_NAME;
  protected readonly timelineMilestones = TIMELINE_MILESTONES;
  protected readonly galleryItems = GALLERY_ITEMS;
}
