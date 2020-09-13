import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitiveProgrammingProfilesComponent } from './competitive-programming-profiles.component';

describe('CompetitiveProgrammingProfilesComponent', () => {
  let component: CompetitiveProgrammingProfilesComponent;
  let fixture: ComponentFixture<CompetitiveProgrammingProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitiveProgrammingProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitiveProgrammingProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
