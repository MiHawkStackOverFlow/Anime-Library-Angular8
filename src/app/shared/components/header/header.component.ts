import { Component, OnInit, Input } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { AnimeAppState } from '../../../core/redux/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @select() animes;
  @Input('title') headerTitle: string;
  today: number = Date.now();
  
  constructor(private ngRedux: NgRedux<AnimeAppState>) { }
  // {{ (animes | async).length }}

  ngOnInit() {
  }

}
