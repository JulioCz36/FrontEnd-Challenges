import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Random-quote-generator';
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['/home']); // Redirige al menú al inicializar
  }
}
