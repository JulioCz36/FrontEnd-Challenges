import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltrosService {
  /*Seleccionamos los filtros y los mandamos */
  selectedLocationSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  selectedLocation$: Observable<string | null> = this.selectedLocationSubject.asObservable();

  totalGuestsSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  totalGuests$: Observable<number> = this.totalGuestsSubject.asObservable();

  setSelectedLocation(location: string) {
    this.selectedLocationSubject.next(location);
  }

  setTotalGuests(totalGuests: number) {
    this.totalGuestsSubject.next(totalGuests);
  }
/*Guardamos los filtros*/ 
  filtroLocationSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  filtroLocation$: Observable<string | null> = this.filtroLocationSubject.asObservable();

  filtroGuestsSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  filtroGuests$: Observable<number> = this.filtroGuestsSubject.asObservable();

  guardarSelectedLocation(location: string) {
    this.filtroLocationSubject.next(location);
  }

  guardarTotalGuests(totalGuests: number) {
    this.filtroGuestsSubject.next(totalGuests);
  }

  /*Propiedades públicas para controlar el estado de los filtros*/
  localidadFiltroAbierto = false;
  personasFiltroAbierto = false;

  localidadFiltroAbiertoChange = new Subject<boolean>();
  personasFiltroAbiertoChange = new Subject<boolean>();

  toggleLocalidadFiltro(abrir: boolean) {
    this.localidadFiltroAbierto = abrir;
    this.localidadFiltroAbiertoChange.next(this.localidadFiltroAbierto);
  }

  togglePersonasFiltro(abrir: boolean) {
    this.personasFiltroAbierto = abrir;
    this.personasFiltroAbiertoChange.next(this.personasFiltroAbierto);
  }
  /*funciones de boton guardar */
  activo = false;
  activarBusqueda(valor: boolean){
    this.activo = valor;
  }

}
