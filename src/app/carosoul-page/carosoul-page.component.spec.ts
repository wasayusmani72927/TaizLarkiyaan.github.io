import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarosoulPageComponent } from './carosoul-page.component';

describe('CarosoulPageComponent', () => {
  let component: CarosoulPageComponent;
  let fixture: ComponentFixture<CarosoulPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarosoulPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarosoulPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
