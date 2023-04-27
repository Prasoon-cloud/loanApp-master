import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankerAuthComponent } from './banker-auth.component';

describe('BankerAuthComponent', () => {
  let component: BankerAuthComponent;
  let fixture: ComponentFixture<BankerAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankerAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankerAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
