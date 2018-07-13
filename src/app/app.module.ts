import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { APIFetchService } from './apifetch.service';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { ErrorsDetectorsChartComponent } from './charts_components/errors-detectors-chart/errors-detectors-chart.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsComponent } from './charts/charts.component';
import { LognumberVisuComponent } from './visual_components/lognumber-visu/lognumber-visu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {DarkModeHandlerService } from './dark-mode-handler.service';
import { ErrorsRunChartComponent } from './charts_components/errors-run-chart/errors-run-chart.component';
import { AuthorVisuComponent } from './visual_components/author-visu/author-visu.component'

@NgModule({
  declarations: [
    AppComponent,
    ErrorsDetectorsChartComponent,
    DashboardComponent,
    ChartsComponent,
    LognumberVisuComponent,
    SidebarComponent,
    ErrorsRunChartComponent,
    AuthorVisuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [APIFetchService, DarkModeHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
