import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FvScheduleComponent } from './fv-schedule.component';

describe('FvScheduleComponent', () => {
  let component: FvScheduleComponent;
  let fixture: ComponentFixture<FvScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FvScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FvScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
