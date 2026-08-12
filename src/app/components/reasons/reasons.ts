import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-reasons',
  templateUrl: './reasons.html',
  styleUrl: './reasons.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Reasons {
  readonly reasons = input.required<readonly string[]>();
}
