import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient , private router : Router) { }

  public getAllusers(data){
    return this.http.get(this.baseUrl + '/api/1.0/user/get/user' , data);
  }
}
