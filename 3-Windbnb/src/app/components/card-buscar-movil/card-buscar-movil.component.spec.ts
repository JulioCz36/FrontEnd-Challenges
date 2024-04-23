import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBuscarMovilComponent } from './card-buscar-movil.component';

describe('CardBuscarMovilComponent', () => {
  let component: CardBuscarMovilComponent;
  let fixture: ComponentFixture<CardBuscarMovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBuscarMovilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBuscarMovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
