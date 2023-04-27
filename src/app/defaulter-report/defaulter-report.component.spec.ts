import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaulterReportComponent } from './defaulter-report.component';

describe('DefaulterReportComponent', () => {
  let component: DefaulterReportComponent;
  let fixture: ComponentFixture<DefaulterReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaulterReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaulterReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
