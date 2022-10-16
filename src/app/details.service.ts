import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  private _detailsUrl = 'http://localhost:8000/details';
  constructor(private http: HttpClient) { }


  getDetails(){
    return this.http.get<any>(this._detailsUrl)
  }
}


