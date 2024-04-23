import { Component, HostListener, OnInit } from '@angular/core';
import { FiltrosService } from '../../servis/filtros.service';

@Component({
  selector: 'app-header-buscador',
  templateUrl: './header-buscador.component.html',
  styleUrls: ['./header-buscador.component.css']
})
export class HeaderBuscadorComponent implements OnInit {
  isMenuActive = false;
  isMenuActiveMovil = false;
  originalScrollPosition = 0;
  screenWidth: number | undefined;

  selectedLocation: string | null = null;
  totalGuests: number = 0;

  constructor(private filtros: FiltrosService) { }

  ngOnInit(): void {
    this.filtros.selectedLocation$.subscribe(location => {
      this.selectedLocation = location;
    });

    this.filtros.totalGuests$.subscribe(totalGuests => {
      this.totalGuests = totalGuests; // Actualiza el total de huéspedes
    });

    // Obtener el ancho de la pantalla al inicio
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // Actualizar el ancho de la pantalla cuando cambie el tamaño de la ventana
    this.screenWidth = event.target.innerWidth;
  }

  toggleMenu() {
    if (this.screenWidth && this.screenWidth >= 769) {
      if (!this.isMenuActive) {
        // Guarda la posición actual antes de abrir el menú
        this.originalScrollPosition = window.scrollY;
      }

      this.isMenuActive = !this.isMenuActive;
    }else{
      if (!this.isMenuActiveMovil) {
        // Guarda la posición actual antes de abrir el menú
        this.originalScrollPosition = window.scrollY;
      }

      this.isMenuActiveMovil = !this.isMenuActiveMovil;
    }
  }

  closeMenu() {
    this.isMenuActive = false;
    this.isMenuActiveMovil = false;
    // Vuelve a la posición original después de cerrar el menú
    window.scrollTo({ top: this.originalScrollPosition, behavior: 'smooth' });
  }
}
