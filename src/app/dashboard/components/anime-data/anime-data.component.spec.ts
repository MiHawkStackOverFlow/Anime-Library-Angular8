import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeDataComponent } from './anime-data.component';

describe('AnimeDataComponent', () => {
  let component: AnimeDataComponent;
  let fixture: ComponentFixture<AnimeDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimeDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
