import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageProcessingProjectsComponent } from './image-processing-projects.component';

describe('ImageProcessingProjectsComponent', () => {
  let component: ImageProcessingProjectsComponent;
  let fixture: ComponentFixture<ImageProcessingProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageProcessingProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageProcessingProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
