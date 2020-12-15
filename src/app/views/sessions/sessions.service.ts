import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {environment} from '../../../environments/environment';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {
  baseUrl : 'http://3.140.73.144:8080/';
  constructor(private http: HttpClient , private router : Router) { }

  public sessionSignIn(user){
    var header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Basic c29jb2w6c2VjcmV0')}`)
    }
    return this.http.post(`http://3.140.73.144:8080/oauth/token?grant_type=password&username=${user['email']}&password=${user['password']}` , user);
    // .map(res => res.json());
  }


}
