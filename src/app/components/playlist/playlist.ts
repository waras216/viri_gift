import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-playlist',
  imports: [NgOptimizedImage],
  templateUrl: './playlist.html',
  styleUrl: './playlist.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Playlist {}
