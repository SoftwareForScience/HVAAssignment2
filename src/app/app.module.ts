import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ErrorsDetectorsChartComponent } from './charts_components/errors-detectors-chart/errors-detectors-chart.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsComponent } from './charts/charts.component';
import { LognumberVisuComponent } from './visual_components/lognumber-visu/lognumber-visu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { APIFetchService } from './apifetch.service';

@NgModule({
  declarations: [
    AppComponent,
    ErrorsDetectorsChartComponent,
    DashboardComponent,
    ChartsComponent,
    LognumberVisuComponent,
    SidebarComponent
  ],
  imports: [
    ChartsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [APIFetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
