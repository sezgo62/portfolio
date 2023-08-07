import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionLongComponent } from './introduction-long.component';

describe('IntroductionLongComponent', () => {
  let component: IntroductionLongComponent;
  let fixture: ComponentFixture<IntroductionLongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroductionLongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroductionLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
