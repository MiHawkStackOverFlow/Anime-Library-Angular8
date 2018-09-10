import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimePicListComponent } from './anime-pic-list.component';

describe('AnimePicListComponent', () => {
  let component: AnimePicListComponent;
  let fixture: ComponentFixture<AnimePicListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimePicListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimePicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
