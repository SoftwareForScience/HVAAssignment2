import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }      from './dashboard/dashboard.component';
import { ChartsComponent }      from './charts/charts.component';
import { ErrorsDetectorsChartComponent } from './charts_components/errors-detectors-chart/errors-detectors-chart.component';
import { ErrorsRunChartComponent } from './charts_components/errors-run-chart/errors-run-chart.component'

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'errordetectorchart', component: ErrorsDetectorsChartComponent },
  { path: 'errorrunchart', component: ErrorsRunChartComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}