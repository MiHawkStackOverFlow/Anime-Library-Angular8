import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
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
export class VillainListComponent implements OnChanges {
  @Input() animeVillains: Array<Villain> = [];
  changeLog: string[] = [];

  constructor() {
    // set all anime villains flip to inactive initially
    this.setFlip(this.animeVillains);
  }

  // set flip property to inactive
  setFlip(villains: Array<Villain>): void {
    villains.forEach(villain => {
      villain['flip'] = 'inactive';
    });
  }

  // toggle flip to show/hide villain details
  toggleFlip(villain: Villain): void {
   villain['flip'] = (villain['flip'] === 'active') ? 'inactive' : 'active';
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    // console.log("Changes", changes);
    const log: string[] = [];
    for (let propName in changes) {
      // get the animeVillains changes object
      let changedProp = changes[propName];
      
      // get current values
      let currentArray = changedProp.currentValue;
      let currentValues: Array<string> = [];
      currentArray.forEach(element => {
        currentValues.push(element.alt);
      });

      // log the first change and then subsequent changes
      if (changedProp.isFirstChange()) {
        log.push(`Initial villains of ${propName} set to ${currentValues}`);
      } else {
        let previousArray = changedProp.previousValue;
        let previousValues: Array<string> = [];
        previousArray.forEach(element => {
          previousValues.push(element.alt);
        });
        log.push(`${propName} changed from ${previousValues} to  ${currentValues}`);
      }

    }
    this.changeLog.push(log.join(', '));
    console.log('Change logs', this.changeLog);
  }

}
