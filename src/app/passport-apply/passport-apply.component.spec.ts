import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassportApplyComponent } from './passport-apply.component';

describe('PassportApplyComponent', () => {
  let component: PassportApplyComponent;
  let fixture: ComponentFixture<PassportApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassportApplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassportApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
