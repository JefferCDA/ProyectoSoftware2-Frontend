import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FvVirtualLicenseComponent } from './fv-virtual-license.component';

describe('FvVirtualLicenseComponent', () => {
  let component: FvVirtualLicenseComponent;
  let fixture: ComponentFixture<FvVirtualLicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FvVirtualLicenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FvVirtualLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
