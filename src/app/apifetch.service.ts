import { Injectable } from '@angular/core';
import {Http,Response} from "@angular/http";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import "rxjs/Rx";
import {InterfaceAPI} from "./interface-api";

@Injectable()
export class APIFetchService {

  private postsURL ="http://100.72.40.171:8081/api/all/entries";

  constructor(private http: Http ) {}
  getPosts(): Observable<InterfaceAPI[]>{
      return this.http
      .get(this.postsURL)
      .map((response: Response)=> {
        return <InterfaceAPI[]>response.json();
      })
      .catch(this.handleError);
      
 }

 private handleError(error: Response) {
   return Observable.throw(error.statusText);
 }

}

