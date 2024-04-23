import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroPersonasComponent } from './filtro-personas.component';

describe('FiltroPersonasComponent', () => {
  let component: FiltroPersonasComponent;
  let fixture: ComponentFixture<FiltroPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroPersonasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
