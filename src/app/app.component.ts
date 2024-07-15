import { Component, OnInit } from '@angular/core';

import { ApiService } from './services/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'angular-coalition-api-challenge';

  patients: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPatients().subscribe(
      (data: any[]) => {
        this.patients = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
