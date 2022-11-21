import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardextractComponent } from './dashboardextract.component';

describe('DashboardextractComponent', () => {
  let component: DashboardextractComponent;
  let fixture: ComponentFixture<DashboardextractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardextractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardextractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
