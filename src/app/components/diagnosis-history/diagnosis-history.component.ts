import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-diagnosis-history',
  templateUrl: './diagnosis-history.component.html',
  styleUrl: './diagnosis-history.component.scss',
})
export class DiagnosisHistoryComponent {
  patient: any;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.selectedPatient.subscribe((patient) => {
      this.patient = patient;
    });
  }
}
