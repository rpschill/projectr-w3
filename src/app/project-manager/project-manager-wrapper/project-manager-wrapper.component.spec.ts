import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagerWrapperComponent } from './project-manager-wrapper.component';

describe('ProjectManagerWrapperComponent', () => {
  let component: ProjectManagerWrapperComponent;
  let fixture: ComponentFixture<ProjectManagerWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectManagerWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectManagerWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
