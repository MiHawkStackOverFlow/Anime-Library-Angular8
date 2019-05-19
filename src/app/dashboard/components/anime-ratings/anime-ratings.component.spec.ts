import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeRatingsComponent } from './anime-ratings.component';

describe('AnimeRatingsComponent', () => {
  let component: AnimeRatingsComponent;
  let fixture: ComponentFixture<AnimeRatingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimeRatingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
