import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-autor-boton',
  templateUrl: './autor-boton.component.html',
  styleUrls: ['./autor-boton.component.css']
})
export class AutorBotonComponent implements OnInit {
  @Input() quoteAuthorData:any
  @Input() quoteGenreData:any

  constructor() { }

  ngOnInit(): void {
  }

}
