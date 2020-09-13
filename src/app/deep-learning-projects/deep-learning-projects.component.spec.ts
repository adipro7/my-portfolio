import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepLearningProjectsComponent } from './deep-learning-projects.component';

describe('DeepLearningProjectsComponent', () => {
  let component: DeepLearningProjectsComponent;
  let fixture: ComponentFixture<DeepLearningProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepLearningProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepLearningProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
