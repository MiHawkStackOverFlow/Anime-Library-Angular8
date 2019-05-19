import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeViewsComponent } from './anime-views.component';

describe('AnimeViewsComponent', () => {
  let component: AnimeViewsComponent;
  let fixture: ComponentFixture<AnimeViewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimeViewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
