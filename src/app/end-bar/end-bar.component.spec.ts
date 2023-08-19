import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndBarComponent } from './end-bar.component';

describe('EndBarComponent', () => {
  let component: EndBarComponent;
  let fixture: ComponentFixture<EndBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
