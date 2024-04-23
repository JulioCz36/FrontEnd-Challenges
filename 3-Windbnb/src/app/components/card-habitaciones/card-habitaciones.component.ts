import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-habitaciones',
  templateUrl: './card-habitaciones.component.html',
  styleUrls: ['./card-habitaciones.component.css']
})
export class CardHabitacionesComponent implements OnInit {

  @Input() Datos:any; 

  ngOnInit(): void {
  }

}
