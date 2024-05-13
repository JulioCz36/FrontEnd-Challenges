import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorBotonComponent } from './autor-boton.component';

describe('AutorBotonComponent', () => {
  let component: AutorBotonComponent;
  let fixture: ComponentFixture<AutorBotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorBotonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutorBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
