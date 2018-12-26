import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Anime } from '../../model/anime';
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.scss']
})
export class AnimeDetailComponent implements OnInit {
  @Input() anime: Anime;

  constructor(
    private route: ActivatedRoute,
    private animeService: AnimeService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getAnime();
  }

  getAnime(): void {
    this.route.params.subscribe(params => {
        if (params['id']) {
          this.animeService.getAnime(params['id']).subscribe(anime => this.anime = anime);
        }
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.animeService.updateAnime(this.anime)
      .subscribe(() => this.goBack());
  }

}
