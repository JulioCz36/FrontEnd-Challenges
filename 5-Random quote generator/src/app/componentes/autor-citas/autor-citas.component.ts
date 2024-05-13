import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autor-citas',
  templateUrl: './autor-citas.component.html',
  styleUrls: ['./autor-citas.component.css']
})
export class AutorCitasComponent implements OnInit {

  quotes: any[] = [];
  autor: string = '';

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void { 
    this.apiService.sharedString$.subscribe((autor) => {
      this.autor = autor;
      this.getQuotesByAuthor(autor);
    });
  }

  getQuotesByAuthor(author: string): void {
    this.apiService.getQuotesByAuthor(author).subscribe(data => {
      this.quotes = data.data;
    });
  }

  busquedaRandom():void{
    this.getRandomQuote();
  }

  getRandomQuote(): void {
    this.router.navigate(['/home']);
  }

}
