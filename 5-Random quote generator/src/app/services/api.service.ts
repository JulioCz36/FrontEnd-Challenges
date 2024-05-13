import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private sharedStringSource = new BehaviorSubject<string>('');
  sharedString$ = this.sharedStringSource.asObservable();

  private apiUrl = 'https://quote-garden.onrender.com/api/v3/quotes';


  constructor(private http: HttpClient) { }

  getQuotesByAuthor(author: string): Observable<any> {
    const params = new HttpParams().set('author', author);
    return this.http.get<any>(this.apiUrl, { params });
  }

  getRandomQuote(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/random`);
  }

  updateSharedString(value: string): void {
    this.sharedStringSource.next(value);
  }

}
