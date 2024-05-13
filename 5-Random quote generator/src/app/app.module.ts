import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotonRandomComponent } from './componentes/boton-random/boton-random.component';
import { MainComponent } from './componentes/main/main.component';
import { CitaComponent } from './componentes/cita/cita.component';
import { AutorBotonComponent } from './componentes/autor-boton/autor-boton.component';
import { AutorCitasComponent } from './componentes/autor-citas/autor-citas.component';



@NgModule({
  declarations: [
    AppComponent,
    BotonRandomComponent,
    MainComponent,
    CitaComponent,
    AutorBotonComponent,
    AutorCitasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
