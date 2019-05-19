import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeGenresComponent } from './anime-genres.component';

describe('AnimeGenresComponent', () => {
  let component: AnimeGenresComponent;
  let fixture: ComponentFixture<AnimeGenresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimeGenresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
