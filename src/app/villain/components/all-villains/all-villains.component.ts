import { Component, OnInit } from '@angular/core';

import { Villain } from '../../../villain/model/villain';
import { villains } from '../../../villain/model/mock-villains';

@Component({
  selector: 'app-all-villains',
  templateUrl: './all-villains.component.html',
  styleUrls: ['./all-villains.component.scss']
})
export class AllVillainsComponent implements OnInit {
  allVillains: Array<Villain>;

  constructor() { }

  ngOnInit() {
    // set anime villains from data
    this.allVillains = villains;
  }

}
