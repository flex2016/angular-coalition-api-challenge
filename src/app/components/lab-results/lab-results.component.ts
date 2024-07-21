import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-lab-results',
  templateUrl: './lab-results.component.html',
  styleUrl: './lab-results.component.scss',
})
export class LabResultsComponent {
  patient: any;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.selectedPatient.subscribe((patient) => {
      this.patient = patient;
    });
  }
}
