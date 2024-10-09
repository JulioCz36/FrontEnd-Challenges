import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pregunta-capital',
  templateUrl: './pregunta-capital.component.html',
  styleUrls: ['./pregunta-capital.component.css']
})
export class PreguntaCapitalComponent implements OnInit {
  quotes: any[] = [];

  datosParaPregunta: any[] = [];
  Letras: string[]=['A','B','C','D'];

  countryData1: any;
  countryData2: any;
  countryData3: any;
  countryData4: any;

  respuestaSeleccionada: string = '';
  esCorrecta: boolean = false;
  respuestaCorrecta: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.Datos();
  }

  Datos(): void {
    this.apiService.getDatos().subscribe(data => {
      this.quotes = data;
      const i1 = Math.floor(Math.random() * this.quotes.length);
      const i2 = Math.floor(Math.random() * this.quotes.length);
      const i3 = Math.floor(Math.random() * this.quotes.length);
      const i4 = Math.floor(Math.random() * this.quotes.length);
      this.getCountryDataByCode(this.quotes[i1].cca2, 1);
      this.getCountryDataByCode(this.quotes[i2].cca2, 2);
      this.getCountryDataByCode(this.quotes[i3].cca2, 3);
      this.getCountryDataByCode(this.quotes[i4].cca2, 4);
    });
  }

  getCountryDataByCode(code: string, index: number): void {
    this.apiService.getCountriesByCodes(code).subscribe(data => {
      switch (index) {
        case 1:
          this.countryData1 = data;
          break;
        case 2:
          this.countryData2 = data;
          break;
        case 3:
          this.countryData3 = data;
          break;
        case 4:
          this.countryData4 = data;
          break;
        default:
          break;
      }

      // Verificar si todos los datos están disponibles
      if (this.countryData1 && this.countryData2 && this.countryData3 && this.countryData4) {
        this.buildPregunta();
      }
    });
  }

  buildPregunta(): void {
    // Obtener las capitales y sus datos
    const capital1 = this.countryData1[0].capital[0];
    const capital2 = this.countryData2[0].capital[0];
    const capital3 = this.countryData3[0].capital[0];
    const capital4 = this.countryData4[0].capital[0];

    // Obtener capitales adicionales
    const additionalCapitals = this.getRandomAdditionalCapitals(capital1, capital2, capital3, capital4);

    // Combinar todas las capitales
    this.datosParaPregunta = [capital1, capital2, capital3, capital4, ...additionalCapitals];

    // Eliminar duplicados
    this.datosParaPregunta = Array.from(new Set(this.datosParaPregunta));

    // Asegurarse de que solo haya 4 elementos
    this.datosParaPregunta = this.datosParaPregunta.slice(0, 4);

    // Mezclar aleatoriamente las respuestas
    this.shuffleArray(this.datosParaPregunta);

    console.log("Datos para pregunta:", this.datosParaPregunta);
  }

  getRandomAdditionalCapitals(capital1: string, capital2: string, capital3: string, capital4: string): string[] {
    // Lista de algunas capitales adicionales
    const additionalCapitals = [capital2, capital3, capital4];

    // Eliminar la capital del país actual de la lista
    const filteredCapitals = additionalCapitals.filter(capital => capital !== capital1);

    // Mezclar aleatoriamente la lista
    this.shuffleArray(filteredCapitals);

    // Tomar solo 3 capitales aleatorias
    return filteredCapitals.slice(0, 3);
  }

  // Función para mezclar aleatoriamente un array
  shuffleArray(array: any[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  handleRespuestaSeleccionada(respuesta: string): void {
    this.respuestaSeleccionada = respuesta;
    console.log('Respuesta seleccionada(padre):', respuesta);
    if (this.countryData1[0].capital[0] === this.respuestaSeleccionada) {
      console.log('correcto');
      this.esCorrecta = true;
    } else {
      console.log('incorrecto');
      this.esCorrecta = false;
      // Mostrar la respuesta correcta y marcarla como seleccionada
      this.respuestaCorrecta = this.countryData1[0].capital[0];
    }
  }

  loQueSigue(){
    if(this.esCorrecta === true){
      console.log('Siguiente Pregunta');
    }else{
      console.log('Ver Resultados');
    }
  }
  

}
