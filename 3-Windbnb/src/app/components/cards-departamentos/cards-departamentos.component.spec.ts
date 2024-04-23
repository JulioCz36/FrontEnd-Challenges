import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsDepartamentosComponent } from './cards-departamentos.component';

describe('CardsDepartamentosComponent', () => {
  let component: CardsDepartamentosComponent;
  let fixture: ComponentFixture<CardsDepartamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsDepartamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsDepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
