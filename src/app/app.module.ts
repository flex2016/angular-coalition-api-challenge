import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
// import { AuthService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { DiagnosticListComponent } from './components/diagnostic-list/diagnostic-list.component';
import { LabResultsComponent } from './components/lab-results/lab-results.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';

@NgModule({
  declarations: [AppComponent, PatientListComponent, HeaderComponent, DiagnosticListComponent, LabResultsComponent, PatientDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
