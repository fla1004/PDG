import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEsmalteComponent } from './tabla-esmalte.component';

describe('TablaEsmalteComponent', () => {
  let component: TablaEsmalteComponent;
  let fixture: ComponentFixture<TablaEsmalteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaEsmalteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaEsmalteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
