import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { SharedService } from '../../services/shared.service';

//TDO - udpe to use signal
@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss'],
})
export class PatientListComponent implements OnInit, OnChanges {
  @Input() patients: any[] = [];
  selectedPatientName: string | null = null;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.selectDefaultPatient();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['patients']) {
      this.selectDefaultPatient();
    }
  }

  selectDefaultPatient() {
    if (this.patients && this.patients.length > 0) {
      this.selectedPatientName = this.patients[0].name;
      this.sharedService.selectPatient(this.patients[0]);
    }
  }

  onSelect(patient: any) {
    console.log('🚀 ~ PatientListComponent ~ onSelect ~ patient:', patient);
    this.selectedPatientName = patient.name;
    this.sharedService.selectPatient(patient);
  }
}
