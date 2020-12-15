import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment} from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient , private router : Router) { }

  public getAllBrands(){
    return this.http.get( this.baseUrl + 'brand/get/all');
  }

  public addBrands(data){
    console.log(data);
    return this.http.post(this.baseUrl + 'brand/add' , data);
  }
}
