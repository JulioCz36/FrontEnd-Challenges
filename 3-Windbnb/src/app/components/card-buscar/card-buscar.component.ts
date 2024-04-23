import { Component, EventEmitter, Output } from '@angular/core';
import { FiltrosService } from '../../servis/filtros.service';
import { take } from 'rxjs/operators';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-card-buscar',
  templateUrl: './card-buscar.component.html',
  styleUrls: ['./card-buscar.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }), // Estado inicial de la animación
        animate('0.5s ease', style({ opacity: 1 })) // Estado final de la animación
      ]),
      transition(':leave', [
        animate('0.5s ease', style({ opacity: 0 })) // Estado final de la animación al salir
      ])
    ])
  ]
})
export class CardBuscarComponent {
  constructor(private filtro: FiltrosService) { }
  @Output() cerrar = new EventEmitter<void>();

  cerrarComponente(): void {
    this.cerrar.emit();
  }

  filtros(): void {
    if(this.filtro.activo){
      this.filtro.filtroLocation$.pipe(take(1)).subscribe(location => {
        this.filtro.filtroGuests$.pipe(take(1)).subscribe(guest => {
          if (location !== null) {
            this.filtro.setSelectedLocation(location);
            this.filtro.setTotalGuests(guest);
          }
        });
      });
    }
    this.filtro.activarBusqueda(false);
  }

  buscarYFiltrar(): void {
    this.Buscar();
    this.filtros();
  }

  Buscar(): void {
    this.filtro.activarBusqueda(true);
  }
}
