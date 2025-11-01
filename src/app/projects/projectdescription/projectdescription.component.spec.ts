import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectdescriptionComponent } from './projectdescription.component';

describe('ProjectdescriptionComponent', () => {
  let component: ProjectdescriptionComponent;
  let fixture: ComponentFixture<ProjectdescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectdescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
