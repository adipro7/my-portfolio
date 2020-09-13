import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CpApiService {
  platform:string;
  username:string;
  constructor(
    private http:HttpClient
  ) { }
  fetch_rating(): Observable<any>{
    const url ="http://cpstats.herokuapp.com/cp/detail?platform="+this.platform+"&username="+this.username;
    return this.http.get(url);
  }
  solved_count(): Observable<any>{
    const url ="http://cpstats.herokuapp.com/cp/solved";
    return this.http.get(url);
  }
}
