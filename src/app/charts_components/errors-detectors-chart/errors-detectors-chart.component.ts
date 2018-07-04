import { Component } from '@angular/core';

@Component({
  selector: 'app-errors-detectors-chart',
  templateUrl: './errors-detectors-chart.component.html'
})

export class ErrorsDetectorsChartComponent {

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['ITS', 'TPC', 'TRD', 'TOF', 'T0', 'V0'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55], label: 'Number of errors'}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}