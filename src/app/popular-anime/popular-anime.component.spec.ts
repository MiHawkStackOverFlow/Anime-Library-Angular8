import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularAnimeComponent } from './popular-anime.component';

describe('PopularAnimeComponent', () => {
  let component: PopularAnimeComponent;
  let fixture: ComponentFixture<PopularAnimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularAnimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
