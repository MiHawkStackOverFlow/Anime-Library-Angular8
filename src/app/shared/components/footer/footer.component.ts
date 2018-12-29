import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerTitle = '';
  constructor(private router: Router) { }

  @Input()
  set title(title: string) {
    this.footerTitle = (title.toUpperCase()) || `ABHISHEK'S ANIME LIBRARY`;
  }

  ngOnInit() { }

}
