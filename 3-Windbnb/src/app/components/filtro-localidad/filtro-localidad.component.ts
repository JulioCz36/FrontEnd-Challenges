import { Component, OnInit } from '@angular/core';
import { FiltrosService } from '../../servis/filtros.service';

@Component({
  selector: 'app-filtro-localidad',
  templateUrl: './filtro-localidad.component.html',
  styleUrls: ['./filtro-localidad.component.css']
})
export class FiltroLocalidadComponent implements OnInit {

  isMenuOpen = false;
  selectedLocation: string | null = null;

  constructor(private selectedLocationService: FiltrosService) { }

  ngOnInit(): void {
    this.selectedLocationService.localidadFiltroAbiertoChange.subscribe(estado => {
      this.isMenuOpen = estado;
      if (estado) {
        // Si se abre el filtro de localidad, cerrar el filtro de personas
        this.selectedLocationService.togglePersonasFiltro(false);
      }
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.selectedLocationService.toggleLocalidadFiltro(true);
  }

  selectLocation(location: string) {
    this.selectedLocation = location;
    this.selectedLocationService.guardarSelectedLocation(location);
    this.isMenuOpen = false; // Cerrar el menú después de seleccionar la ubicación
  }
}
