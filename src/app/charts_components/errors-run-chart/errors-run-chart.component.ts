import { Component, OnInit } from '@angular/core';
import { APIFetchService } from 'src/app/apifetch.service';
import { Chart } from 'chart.js';
import { InterfaceAPI } from "src/app/interface-api";
import { error } from 'util';
import { ValueTransformer } from '../../../../node_modules/@angular/compiler/src/util';

@Component({
  selector: 'app-errors-run-chart',
  templateUrl: './errors-run-chart.component.html',
  styleUrls: ['./errors-run-chart.component.scss']
})
export class ErrorsRunChartComponent implements OnInit {

  _postsArray: InterfaceAPI[];
  runArray = [];
  countsSubsystem = [];
  compressedrunArray = [];
  chartRun = [];

  constructor(private _APIFetch: APIFetchService) {}

  getPosts(): void {
    var i;
    this._APIFetch.getPosts().
    subscribe(
      resultArray =>{ this._postsArray = resultArray;
      for(i=0;i<resultArray.length;i++){    //Fetching subsystems in an array
        this.runArray.push(resultArray[i].run);
      }
      //Counting logs by subsystem and remove doubles
      let copy = this.runArray.slice(0);
      // first loop goes over every element
	    for (var i = 0; i < this.runArray.length; i++) {
        let Count = 0;
        // loop over every element in the copy and see if it's the same
		    for (var w = 0; w < copy.length; w++) {
			    if (this.runArray[i] == copy[w]) {
				  // increase amount of times duplicate is found
				  Count++;
				  // sets item to undefined
				  delete copy[w];
			    }
        }
        if (Count > 0) {
          let a = {value:"", count:0};
          a.value = this.runArray[i];
          a.count = Count;
          this.compressedrunArray.push(a);
        }
      }
      for(i=0; i < this.compressedrunArray.length;i++)
      {
        if(this.compressedrunArray[i].value == null ){
          delete this.compressedrunArray[i];
        }
      }
      this.runArray=[];
      this.countsSubsystem=[];

      for(i=0;i<this.compressedrunArray.length;i++){
        this.runArray.push(this.compressedrunArray[i].value);
      }
      for(i=0;i<this.compressedrunArray.length;i++){
        this.countsSubsystem.push(this.compressedrunArray[i].count);
      }

      //Charting
      this.chartRun = new Chart('canvasRun', {
        type: 'bar',
        data: {
          labels: this.runArray,
          datasets: [
            { 
              label: "Number of log",
              data: this.countsSubsystem,
              borderColor: "#D46A6A",
              backgroundColor: "#D46A6A" ,
              fill: true
            }
          ]
        },
        options: {
          responsive: true,
					legend: {
						position: 'top',
					},
					title: {
						display: true,
						text: 'Number of logs by runs chart'
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true,
              ticks: {
                beginAtZero: true
              }
            }],
          }
        }
      });
      }
       ,
      error => console.log("Error :: " + error )
      )
  }

  ngOnInit(): void{
    this.getPosts();
  }
  
}
