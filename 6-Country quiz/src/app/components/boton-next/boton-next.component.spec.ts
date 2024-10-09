import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonNextComponent } from './boton-next.component';

describe('BotonNextComponent', () => {
  let component: BotonNextComponent;
  let fixture: ComponentFixture<BotonNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonNextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
