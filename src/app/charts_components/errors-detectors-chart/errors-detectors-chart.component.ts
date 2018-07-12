import { Component } from '@angular/core';
import { APIFetchService } from 'src/app/apifetch.service';
import { Chart } from 'chart.js';
import { InterfaceAPI } from "src/app/interface-api";
import { error } from 'util';
import { ValueTransformer } from '../../../../node_modules/@angular/compiler/src/util';

@Component({
  selector: 'app-errors-detectors-chart',
  templateUrl: './errors-detectors-chart.component.html',
  providers:[APIFetchService]
})

export class ErrorsDetectorsChartComponent {

  _postsArray: InterfaceAPI[];
  subsystemArray = [];
  countsSubsystem = [];
  compressedsubsytemArray = [];
  chartDetectors = [];

  constructor(private _APIFetch: APIFetchService) {}

  getPosts(): void {
    var i;
    this._APIFetch.getPosts().
    subscribe(
      resultArray =>{ this._postsArray = resultArray;
      for(i=0;i<resultArray.length;i++){    //Fetching subsystems in an array
        this.subsystemArray.push(resultArray[i].subsystem);
      }
      //Counting logs by subsystem and remove doubles
      let copy = this.subsystemArray.slice(0);
      // first loop goes over every element
	    for (var i = 0; i < this.subsystemArray.length; i++) {
        let Count = 0;
        // loop over every element in the copy and see if it's the same
		    for (var w = 0; w < copy.length; w++) {
			    if (this.subsystemArray[i] == copy[w]) {
				  // increase amount of times duplicate is found
				  Count++;
				  // sets item to undefined
				  delete copy[w];
			    }
        }
        if (Count > 0) {
          let a = {value:"", count:0};
          a.value = this.subsystemArray[i];
          a.count = Count;
          this.compressedsubsytemArray.push(a);
        }
      }
      for(i=0; i < this.compressedsubsytemArray.length;i++)
      {
        if(this.compressedsubsytemArray[i].value == null ){
          delete this.compressedsubsytemArray[i];
        }
      }
      this.subsystemArray=[];
      this.countsSubsystem=[];

      for(i=0;i<this.compressedsubsytemArray.length;i++){
        this.subsystemArray.push(this.compressedsubsytemArray[i].value);
      }
      for(i=0;i<this.compressedsubsytemArray.length;i++){
        this.countsSubsystem.push(this.compressedsubsytemArray[i].count);
      }

      //Charting
      this.chartDetectors = new Chart('canvasDetectors', {
        type: 'bar',
        data: {
          labels: this.subsystemArray,
          datasets: [
            { 
              label: "Number of log",
              data: this.countsSubsystem,
              borderColor: "#68B159",
              backgroundColor: "#68B159" ,
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
						text: 'Number of logs by detector chart'
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