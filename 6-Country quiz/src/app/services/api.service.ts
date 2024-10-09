import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://restcountries.com/v3.1/all';
  private apiUrl2 = 'https://restcountries.com/v3.1/alpha/';


  constructor(private http: HttpClient) { }


  getDatos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getCountriesByCodes(codes: string): Observable<any> {
    const url = `${this.apiUrl2}${codes}`;
    return this.http.get<any>(url);
  }


}
