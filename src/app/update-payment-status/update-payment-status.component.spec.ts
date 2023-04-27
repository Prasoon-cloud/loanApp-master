import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePaymentStatusComponent } from './update-payment-status.component';

describe('UpdatePaymentStatusComponent', () => {
  let component: UpdatePaymentStatusComponent;
  let fixture: ComponentFixture<UpdatePaymentStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePaymentStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePaymentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
