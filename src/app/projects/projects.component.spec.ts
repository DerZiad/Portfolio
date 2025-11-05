import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize projectTypes with All and unique types', () => {
    expect(component.projectTypes).toContain('All');
    const types = component.projectTypes.filter(t => t !== 'All');
    const unique = Array.from(new Set(types));
    expect(types.length).toBe(unique.length);
  });

  it('selectType should update selectedTypeOfProject', () => {
    component.selectType('AI');
    expect(component.selectedTypeOfProject).toBe('AI');
  });

  it('filter should return only the selected type', () => {
    component.selectType('Security');
    const filtered = component.filter(component.data);
    expect(filtered.every(p => p.type === 'Security')).toBeTrue();
  });

  it('openInNewTab should call window.open with correct args', () => {
    const openSpy = spyOn(window, 'open');
    const evt = { stopPropagation: () => {} } as any;
    component.openInNewTab(component.data[0], evt);
    expect(openSpy).toHaveBeenCalledWith(component.data[0].link, '_blank', 'noopener');
  });

  it('goToLink should call document.location.replace', () => {
    const replaceSpy = spyOn(document.location as any, 'replace').and.callFake(() => {});
    component.goToLink(component.data[0]);
    expect(replaceSpy).toHaveBeenCalledWith(component.data[0].link);
  });
});
