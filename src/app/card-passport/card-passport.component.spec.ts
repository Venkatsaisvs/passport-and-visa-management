import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPassportComponent } from './card-passport.component';

describe('CardPassportComponent', () => {
  let component: CardPassportComponent;
  let fixture: ComponentFixture<CardPassportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPassportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPassportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
