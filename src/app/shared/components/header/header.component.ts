import { Component, OnInit, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { AnimeAppState } from '../../../core/redux/store';

import { SignupComponent } from './../../../user/components/signup/signup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @select() animes;
  @Input('title') headerTitle: string;
  today: number = Date.now();
  
  signUpModal :SignupComponent;
  
  constructor(private ngRedux: NgRedux<AnimeAppState>) { }

  ngOnInit() {
  }

}
