import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Todo - Update code to use signal
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private patientSource = new BehaviorSubject<any>(null);
  selectedPatient = this.patientSource.asObservable();

  constructor() {}

  selectPatient(patient: any) {
    this.patientSource.next(patient);
  }
}
