import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLoanComponent } from './edit-loan.component';

describe('EditLoanComponent', () => {
  let component: EditLoanComponent;
  let fixture: ComponentFixture<EditLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
