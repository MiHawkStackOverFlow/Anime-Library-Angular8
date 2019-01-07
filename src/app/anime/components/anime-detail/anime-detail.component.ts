import { Component, OnInit, Input, ContentChild, 
         AfterContentInit, AfterContentChecked,  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Anime } from '../../model/anime';
import { AnimeService } from '../../services/anime.service';

import { PanelComponent } from '../../../shared/components/panel/panel.component';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.scss']
})
export class AnimeDetailComponent implements OnInit, AfterContentInit, AfterContentChecked {
  @Input() anime: Anime;
  // Query for a CONTENT child of type `PanelComponent`
  @ContentChild(PanelComponent) contentChild: PanelComponent;
  
  constructor(
    private route: ActivatedRoute,
    private animeService: AnimeService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getAnime();
  }

  ngAfterContentInit() {
    // contentChild is set after the content has been initialized
    console.log('AfterContentInit');
  }

  ngAfterContentChecked() {
    // contentChild is updated after the content has been checked
    console.log('AfterContentChecked');
  }

  getAnime(): void {
    // get id from route parameters and get anime by that id
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
    this.animeService.updateAnime(this.anime).subscribe(() => this.goBack());
  }

}
