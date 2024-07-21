import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrl: './patient-details.component.scss',
})
export class PatientDetailsComponent {
  patient: any;

  constructor(private sharedService: SharedService) {}
  ngOnInit() {
    this.sharedService.selectedPatient.subscribe((patient) => {
      this.patient = patient;
    });
  }
}
