import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisChartComponent } from './diagnosis-chart.component';

describe('DiagnosisChartComponent', () => {
  let component: DiagnosisChartComponent;
  let fixture: ComponentFixture<DiagnosisChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiagnosisChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiagnosisChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
