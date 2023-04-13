import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class SharedServiceService {
  API_KEY = 'ace6c486ba2440d4bc53b4336a1faa7f';
  constructor(private http: HttpClient) {}

  getData() {
    let pageSize = 30;
    return this.http.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.API_KEY}&pageSize=${pageSize}`
    );
  }
}
