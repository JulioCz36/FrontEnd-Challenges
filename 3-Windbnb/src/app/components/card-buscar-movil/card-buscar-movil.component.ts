import { Component, EventEmitter, Output } from '@angular/core';
import { FiltrosService } from '../../servis/filtros.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-card-buscar-movil',
  templateUrl: './card-buscar-movil.component.html',
  styleUrls: ['./card-buscar-movil.component.css'],
})
export class CardBuscarMovilComponent {
  constructor(private filtro: FiltrosService) {}
  @Output() cerrar = new EventEmitter<void>();

  cerrarComponente(): void {
    this.cerrar.emit();
  }
  
  buscarYFiltrar(): void {
    this.Buscar();
    this.filtros();
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
  Buscar(): void {
    this.filtro.activarBusqueda(true);
  }
}
