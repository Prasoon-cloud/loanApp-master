import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullLoanComponent } from './pull-loan.component';

describe('PullLoanComponent', () => {
  let component: PullLoanComponent;
  let fixture: ComponentFixture<PullLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PullLoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PullLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
