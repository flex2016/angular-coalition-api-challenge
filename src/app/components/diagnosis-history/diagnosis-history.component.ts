import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-diagnosis-history',
  templateUrl: './diagnosis-history.component.html',
  styleUrls: ['./diagnosis-history.component.scss'],
})
export class DiagnosisHistoryComponent implements OnInit {
  patient: any;
  selectedMonth: any;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.selectedPatient.subscribe((patient) => {
      this.patient = patient;
      if (patient) {
        this.selectedMonth = patient.diagnosis_history[0];
      }
    });
  }

  onMonthChange(event: Event) {
    const selectedMonthName = (event.target as HTMLSelectElement).value;
    this.selectedMonth = this.patient.diagnosis_history.find(
      (month: any) => month.month === selectedMonthName
    );
  }
}
