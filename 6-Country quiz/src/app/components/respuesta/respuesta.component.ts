import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent implements OnInit {

  @Input() quoteData: any;
  @Input() letraData: any;
  @Input() esCorrecta: boolean = false;
  @Input() respuestaSeleccionada: string = '';
  @Input() respuestaCorrecta: string = '';

  @Output() updateRespuesta: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(): void {
    if (this.respuestaSeleccionada === '') {
    console.log('Respuesta seleccionada (hijo):', this.quoteData);
    this.updateRespuesta.emit(this.quoteData);
  }
  }

}
