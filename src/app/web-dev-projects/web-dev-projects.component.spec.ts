import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDevProjectsComponent } from './web-dev-projects.component';

describe('WebDevProjectsComponent', () => {
  let component: WebDevProjectsComponent;
  let fixture: ComponentFixture<WebDevProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebDevProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDevProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
