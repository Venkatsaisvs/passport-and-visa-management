import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaCancelComponent } from './visa-cancel.component';

describe('VisaCancelComponent', () => {
  let component: VisaCancelComponent;
  let fixture: ComponentFixture<VisaCancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisaCancelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
