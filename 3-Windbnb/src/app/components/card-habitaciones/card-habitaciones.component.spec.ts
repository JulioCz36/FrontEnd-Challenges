import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHabitacionesComponent } from './card-habitaciones.component';

describe('CardHabitacionesComponent', () => {
  let component: CardHabitacionesComponent;
  let fixture: ComponentFixture<CardHabitacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHabitacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardHabitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
