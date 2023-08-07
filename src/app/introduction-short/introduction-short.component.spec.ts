import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionShortComponent } from './introduction-short.component';

describe('IntroductionShortComponent', () => {
  let component: IntroductionShortComponent;
  let fixture: ComponentFixture<IntroductionShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroductionShortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroductionShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
