import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsBaseComponent } from './projects-base.component';

describe('ProjectsBaseComponent', () => {
  let component: ProjectsBaseComponent;
  let fixture: ComponentFixture<ProjectsBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
