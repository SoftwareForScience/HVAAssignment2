import { Component, OnInit } from '@angular/core';
import { APIFetchService } from 'src/app/apifetch.service';
import { InterfaceAPI } from "src/app/interface-api";
import { error } from 'util';
import { ValueTransformer } from '../../../../node_modules/@angular/compiler/src/util';

@Component({
  selector: 'app-lognumber-visu',
  templateUrl: './lognumber-visu.component.html',
  styleUrls: ['./lognumber-visu.component.scss']
})
export class LognumberVisuComponent implements OnInit {

  _postsArray: InterfaceAPI[];
  logCounts = 0;

  constructor(private _APIFetch: APIFetchService) {}

  getPosts(): void {
    var i;
    this._APIFetch.getPosts().
    subscribe(
      resultArray =>{ this._postsArray = resultArray;
      //Counting logs by subsystem and remove doubles
      this.logCounts = resultArray.length;
      }
       ,
      error => console.log("Error :: " + error )
      )
  }

  ngOnInit(): void{
    this.getPosts();
  }
  

}
