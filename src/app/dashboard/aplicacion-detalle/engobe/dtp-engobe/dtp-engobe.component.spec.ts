import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtpEngobeComponent } from './dtp-engobe.component';

describe('DtpEngobeComponent', () => {
  let component: DtpEngobeComponent;
  let fixture: ComponentFixture<DtpEngobeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtpEngobeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DtpEngobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
