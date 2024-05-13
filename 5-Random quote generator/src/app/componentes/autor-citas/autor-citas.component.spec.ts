import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorCitasComponent } from './autor-citas.component';

describe('AutorCitasComponent', () => {
  let component: AutorCitasComponent;
  let fixture: ComponentFixture<AutorCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorCitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutorCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
