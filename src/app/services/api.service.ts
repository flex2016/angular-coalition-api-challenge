import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://fedskillstest.coalitiontechnologies.workers.dev';

  constructor(private http: HttpClient) {}

  getPatients(): Observable<any> {
    const username = 'coalition';
    const password = 'skills-test';
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password),
    });

    return this.http.get(this.apiUrl, { headers });
  }
}
