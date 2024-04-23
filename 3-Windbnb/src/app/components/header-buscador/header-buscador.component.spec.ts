import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBuscadorComponent } from './header-buscador.component';

describe('HeaderBuscadorComponent', () => {
  let component: HeaderBuscadorComponent;
  let fixture: ComponentFixture<HeaderBuscadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderBuscadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderBuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
