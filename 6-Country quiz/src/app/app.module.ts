import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PreguntaCapitalComponent } from './components/pregunta-capital/pregunta-capital.component';
import { RespuestaComponent } from './components/respuesta/respuesta.component';
import { BotonNextComponent } from './components/boton-next/boton-next.component';



@NgModule({
  declarations: [
    AppComponent,
    PreguntaCapitalComponent,
    RespuestaComponent,
    BotonNextComponent,
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
