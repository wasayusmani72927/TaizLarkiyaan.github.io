import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssentialArtifactsComponent } from './essential-artifacts.component';

describe('EssentialArtifactsComponent', () => {
  let component: EssentialArtifactsComponent;
  let fixture: ComponentFixture<EssentialArtifactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EssentialArtifactsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EssentialArtifactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
