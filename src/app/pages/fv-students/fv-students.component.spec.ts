import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FvStudentsComponent } from './fv-students.component';

describe('FvStudentsComponent', () => {
  let component: FvStudentsComponent;
  let fixture: ComponentFixture<FvStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FvStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FvStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
