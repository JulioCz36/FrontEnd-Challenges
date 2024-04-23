import { Component, OnInit } from '@angular/core';
import { FiltrosService } from '../../servis/filtros.service';

@Component({
  selector: 'app-filtro-personas',
  templateUrl: './filtro-personas.component.html',
  styleUrls: ['./filtro-personas.component.css']
})
export class FiltroPersonasComponent implements OnInit {

  isMenuOpen = false;
  selectedLocation: string | null = null;
  contadorAdultos: number = 0;
  contadorNinos: number = 0;
  totalGuests: number = 0;

  constructor(private selectedPersonasService: FiltrosService) { }

  ngOnInit(): void {
    this.selectedPersonasService.personasFiltroAbiertoChange.subscribe(estado => {
      this.isMenuOpen = estado;
      if (estado) {
        // Si se abre el filtro de personas, cerrar el filtro de localidad
        this.selectedPersonasService.toggleLocalidadFiltro(false);
      }
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.selectedPersonasService.togglePersonasFiltro(true);
  }
  
  incrementCounter(type: number) {
    if (type === 1) {
      this.contadorAdultos++;
    } else if (type === 2) {
      this.contadorNinos++;
    }
    this.updateTotalGuests();
  }

  decrementCounter(type: number) {
    if (type === 1 && this.contadorAdultos > 0) {
      this.contadorAdultos--;
    } else if (type === 2 && this.contadorNinos > 0) {
      this.contadorNinos--;
    }
    this.updateTotalGuests();
  }

  updateTotalGuests() {
    this.totalGuests = this.contadorAdultos + this.contadorNinos;
    this.selectedPersonasService.guardarTotalGuests(this.totalGuests); // Actualiza el total de huéspedes en el servicio
  }
  
}
