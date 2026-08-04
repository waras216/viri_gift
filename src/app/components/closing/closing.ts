import { ChangeDetectionStrategy, Component } from '@angular/core';

interface LoveLetter {
  char: string;
  index: number;
}

function buildLoveWords(text: string): LoveLetter[][] {
  let index = 0;
  return text.split(' ').map((word) => word.split('').map((char) => ({ char, index: index++ })));
}

@Component({
  selector: 'app-closing',
  templateUrl: './closing.html',
  styleUrl: './closing.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Closing {
  protected readonly loveWords = buildLoveWords('TE AMOO VIRIDIANA REYES JIMENEZ');
  protected readonly floatingHearts = Array.from({ length: 8 }, (_, i) => i);
}
