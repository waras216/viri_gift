import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface JourneyStop {
  name: string;
  description: string;
}

@Component({
  selector: 'app-journey-map',
  templateUrl: './journey-map.html',
  styleUrl: './journey-map.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JourneyMap {
  readonly stops = input.required<readonly JourneyStop[]>();
}
