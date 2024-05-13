import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  quotes: any[] = [];

  quoteText: string = '';
  quoteAuthor: string = '';
  quoteGenre: string = '';

  constructor(private apiService: ApiService, private router: Router) { 
  }

  ngOnInit(): void {
    this.getRandomQuote();
  }

  busquedaRandom():void{
    this.getRandomQuote();
  }

  getRandomQuote(): void {
    this.apiService.getRandomQuote().subscribe(data => {
      const randomQuote = data.data[0];
      this.quoteText = randomQuote.quoteText;
      this.quoteAuthor = randomQuote.quoteAuthor;
      this.quoteGenre = randomQuote.quoteGenre;
    });
  }
  navigateAutor(): void {
    this.router.navigate(['/autor']);
    this.emitString(this.quoteAuthor);
  }

  emitString(autor:string): void {
    this.apiService.updateSharedString(autor);
  }
  

}
