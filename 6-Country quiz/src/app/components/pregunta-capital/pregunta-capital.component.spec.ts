import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaCapitalComponent } from './pregunta-capital.component';

describe('PreguntaCapitalComponent', () => {
  let component: PreguntaCapitalComponent;
  let fixture: ComponentFixture<PreguntaCapitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntaCapitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreguntaCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
