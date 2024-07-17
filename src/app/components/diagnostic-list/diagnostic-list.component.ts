import { Component, Input } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-diagnostic-list',
  templateUrl: './diagnostic-list.component.html',
  styleUrl: './diagnostic-list.component.scss',
})
export class DiagnosticListComponent {
  patient: any;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.selectedPatient.subscribe((patient) => {
      this.patient = patient;
    });
  }
}
