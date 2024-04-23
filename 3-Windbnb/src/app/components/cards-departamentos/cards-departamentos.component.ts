import { Component, OnInit } from '@angular/core';
import { HabitacionesModel } from 'src/app/models/proyect.model';
import { DATOS } from 'src/assets/accesorios/stays';
import { FiltrosService } from '../../servis/filtros.service';

@Component({
  selector: 'app-cards-departamentos',
  templateUrl: './cards-departamentos.component.html',
  styleUrls: ['./cards-departamentos.component.css']
})
export class CardsDepartamentosComponent implements OnInit {

  datosList: HabitacionesModel[] = DATOS;
  habitacionesFiltradas: HabitacionesModel[] = [];

  constructor(private filtrosService: FiltrosService) { }

  ngOnInit(): void {
    this.actualizarConteoHabitaciones();
    this.filtrosService.selectedLocation$.subscribe(location => {
      this.filtrosService.totalGuests$.subscribe(totalGuests => {
        this.actualizarHabitacionesFiltradas(location, totalGuests);
      });
    });
  }

  getFilteredData(location: string | null, totalGuests: number | null): HabitacionesModel[] {
    let habitacionesFiltradas = this.datosList;

    if (location !== null) {
      habitacionesFiltradas = habitacionesFiltradas.filter(habitacion => habitacion.city === location);
    }if (totalGuests !== null && totalGuests > 0) {
      habitacionesFiltradas = habitacionesFiltradas.filter(habitacion => habitacion.maxGuests >= totalGuests);
    }
      return habitacionesFiltradas;
  }

  private actualizarHabitacionesFiltradas(location: string | null, totalGuests: number | null): void {
    // Filtrar habitaciones
    this.habitacionesFiltradas = this.getFilteredData(location, totalGuests);

    // Actualizar el conteo de habitaciones
    this.actualizarConteoHabitaciones();
  }

  private actualizarConteoHabitaciones(): void {
    const conteo = this.habitacionesFiltradas.length;
  }
}
