import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarFoldersComponent } from './sidebar-folders.component';

describe('SidebarFoldersComponent', () => {
  let component: SidebarFoldersComponent;
  let fixture: ComponentFixture<SidebarFoldersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarFoldersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarFoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
