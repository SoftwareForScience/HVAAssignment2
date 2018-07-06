import { Component } from '@angular/core';
import { APIFetchService } from 'src/app/apifetch.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-errors-detectors-chart',
  templateUrl: './errors-detectors-chart.component.html'
})

export class ErrorsDetectorsChartComponent {

  chart = []; // This will hold our chart info

  constructor(private _APIFetch: APIFetchService) {}

  ngOnInit() {
    this._APIFetch.dailyForecast()
      .subscribe(res => {
        console.log(res)
      })
  }
}