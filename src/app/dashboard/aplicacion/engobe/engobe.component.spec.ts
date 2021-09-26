import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngobeComponent2 } from './engobe.component';

describe('EngobeComponent2', () => {
  let component: EngobeComponent2;
  let fixture: ComponentFixture<EngobeComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngobeComponent2 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngobeComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
