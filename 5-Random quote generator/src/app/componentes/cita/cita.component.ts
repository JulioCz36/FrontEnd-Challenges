import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {

  @Input() quoteTextData:any


  constructor() { 
  }

  ngOnInit(): void {
  }

}
