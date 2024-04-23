import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardHabitacionesComponent } from './components/card-habitaciones/card-habitaciones.component';
import { CardsDepartamentosComponent } from './components/cards-departamentos/cards-departamentos.component';
import { HeaderBuscadorComponent } from './components/header-buscador/header-buscador.component';
import { CardBuscarComponent } from './components/card-buscar/card-buscar.component';
import { ButtonBuscarComponent } from './components/button-buscar/button-buscar.component';
import { FiltroLocalidadComponent } from './components/filtro-localidad/filtro-localidad.component';
import { FiltroPersonasComponent } from './components/filtro-personas/filtro-personas.component';
import { CardBuscarMovilComponent } from './components/card-buscar-movil/card-buscar-movil.component';

@NgModule({
  declarations: [
    AppComponent,
    CardHabitacionesComponent,
    CardsDepartamentosComponent,
    HeaderBuscadorComponent,
    CardBuscarComponent,
    ButtonBuscarComponent,
    FiltroLocalidadComponent,
    FiltroPersonasComponent,
    CardBuscarMovilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
