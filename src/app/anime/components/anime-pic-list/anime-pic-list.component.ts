import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Anime } from '../../model/anime';

@Component({
  selector: 'app-anime-pic-list',
  templateUrl: './anime-pic-list.component.html',
  styleUrls: ['./anime-pic-list.component.scss']
})
export class AnimePicListComponent implements OnInit {
  @Input() popularAnimes: Array<Anime>;
  @Output() toggledAnime = new EventEmitter<Anime>();

  constructor() { }

  ngOnInit() { }

  // like & dislike anime
  likeDislikeAnime(selectedAnime: Anime): void {
     this.toggledAnime.emit(selectedAnime);
  }

}
