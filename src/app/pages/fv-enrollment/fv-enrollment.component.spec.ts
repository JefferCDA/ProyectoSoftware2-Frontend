import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FvEnrollmentComponent } from './fv-enrollment.component';

describe('FvEnrollmentComponent', () => {
  let component: FvEnrollmentComponent;
  let fixture: ComponentFixture<FvEnrollmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FvEnrollmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FvEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
