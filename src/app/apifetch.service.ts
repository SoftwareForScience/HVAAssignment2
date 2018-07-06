import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class APIFetchService {

  constructor(private _http: HttpClient) { }

  dailyForecast() {
    return this._http.get("http://heikovm.hihva.nl/api/all/entries?personid=0&name=Anonymous&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwidXNlcm5hbWUiOiJBbm9ueW1vdXMiLCJhY2Nlc3MiOjAsImlhdCI6MTUzMDg2NDU2OCwiZXhwIjoxNTMwOTUwOTY4LCJpc3MiOiJvMi11aSJ9.yjLlq_p3WePs6tvK_Aepk0aIZiYATdh503sAQAQDDP4")
      .map(result => result);
  }
}
