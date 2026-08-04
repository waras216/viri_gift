import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PetalsCanvas } from '../petals-canvas/petals-canvas';

@Component({
  selector: 'app-hero',
  imports: [PetalsCanvas],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  readonly partnerNames = input.required<string>();
  readonly sinceDateLabel = input.required<string>();
}
