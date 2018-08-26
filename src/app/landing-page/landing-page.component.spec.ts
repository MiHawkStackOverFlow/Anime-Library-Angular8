import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page.component';
import { NaturalType } from './../shared/pipes/natural-type.pipe';

@Component({selector: 'app-carousel', template: ''})
class CarouselStubComponent {}

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule ],
      declarations: [ LandingPageComponent, NaturalType, CarouselStubComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
