import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullMonthlyPaymentCollectionListComponent } from './pull-monthly-payment-collection-list.component';

describe('PullMonthlyPaymentCollectionListComponent', () => {
  let component: PullMonthlyPaymentCollectionListComponent;
  let fixture: ComponentFixture<PullMonthlyPaymentCollectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PullMonthlyPaymentCollectionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PullMonthlyPaymentCollectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
