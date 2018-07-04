import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { ErrorsDetectorsChartComponent } from './charts_components/errors-detectors-chart/errors-detectors-chart.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsComponent } from './charts/charts.component';
import { LognumberVisuComponent } from './visual_components/lognumber-visu/lognumber-visu.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorsDetectorsChartComponent,
    DashboardComponent,
    ChartsComponent,
    LognumberVisuComponent
  ],
  imports: [
    ChartsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
