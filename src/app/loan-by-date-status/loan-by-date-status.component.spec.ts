import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanByDateStatusComponent } from './loan-by-date-status.component';

describe('LoanByDateStatusComponent', () => {
  let component: LoanByDateStatusComponent;
  let fixture: ComponentFixture<LoanByDateStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanByDateStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanByDateStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
