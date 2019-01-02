import { Component, OnInit } from '@angular/core';

import { Villain } from '../../../villain/model/villain';
import { VillainService } from '../../services/villain.service';

@Component({
  selector: 'app-all-villains',
  templateUrl: './all-villains.component.html',
  styleUrls: ['./all-villains.component.scss']
})
export class AllVillainsComponent implements OnInit {
  allVillains: Array<Villain>;

  constructor(private villainService: VillainService) { }

  ngOnInit() {
    // get anime villains from service
    this.getVillains();
  }

  getVillains(): void {
     this.villainService.getVillains()
                        .subscribe(villains => this.allVillains = villains); 
  }

}
