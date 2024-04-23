import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBuscarComponent } from './button-buscar.component';

describe('ButtonBuscarComponent', () => {
  let component: ButtonBuscarComponent;
  let fixture: ComponentFixture<ButtonBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonBuscarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
