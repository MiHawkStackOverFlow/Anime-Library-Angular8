import { Component, OnInit, Input } from '@angular/core';
import { Villain } from '../../../villain/model/villain';

import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-villain-list',
  templateUrl: './villain-list.component.html',
  styleUrls: ['./villain-list.component.scss'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179.9deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])  
  ]
})
export class VillainListComponent implements OnInit {
  @Input() animeVillains: Array<Villain> = [];

  constructor() {
    // set all anime villains flip to inactive initially
    this.setFlip(this.animeVillains);
   }

  // set flip property to inactive
  setFlip(villains: Array<Villain>): void {
    villains.forEach(villain => {
      villain['flip'] = "inactive";
    });
  }

  // toggle flip to show/hide villain details
  toggleFlip(villain: Villain): void {
   villain['flip'] = (villain['flip'] == 'active') ? 'inactive' : 'active';
  }

  ngOnInit() {
  }

}
