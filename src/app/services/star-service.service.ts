import { Injectable } from '@angular/core';
import { getLocaleFirstDayOfWeek } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarServiceService {

  constructor(private http: HttpClient) { 
      }

  getST(num){
    return this.http.get(`https:swapi.co/api/people/${num}`) 

  }

  getSP(url){
    return this.http.get(`${url}`)
  }

}

