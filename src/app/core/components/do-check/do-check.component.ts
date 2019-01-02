import { Component, Input, DoCheck } from '@angular/core';
import { Anime } from './../../../anime/model/anime';

@Component({
  selector: 'app-do-check',
  templateUrl: './do-check.component.html',
  styleUrls: ['./do-check.component.scss']
})
export class DoCheckComponent implements DoCheck {
  @Input() anime: Anime;

  changeDetected = false;
  changeLog: string[] = [];
  oldAnimeName = '';
  oldLogLength = 0;
  noChangeCount = 0;

  ngDoCheck() {
      // check anime name change from old to new
      if (this.anime.name !== this.oldAnimeName) {
        this.changeDetected = true;
        this.changeLog.push(`DoCheck: Anime name changed to "${this.anime.name}" from "${this.oldAnimeName}"`);
        this.oldAnimeName = this.anime.name;
      }

      if (this.changeDetected) {
        this.noChangeCount = 0;
      } else {
        const count = this.noChangeCount += 1;
        const noChangeMsg = `DoCheck called ${count}x when no change to anime name`;
        if (count === 1) {
          // add new "no change" message
          this.changeLog.push(noChangeMsg);
        } else {
          // update last "no change" message
          this.changeLog[this.changeLog.length - 1] = noChangeMsg;
        }
      }

      this.changeDetected = false;
      console.log('Change log anime ngdocheck', this.changeLog);
  }
}
