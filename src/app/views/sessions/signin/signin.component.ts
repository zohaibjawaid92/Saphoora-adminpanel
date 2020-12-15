import { Component, OnInit, ViewChild } from '@angular/core';
import { MatProgressBar, MatButton } from '@angular/material';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionsService } from '../sessions.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @ViewChild(MatProgressBar) progressBar: MatProgressBar;
  @ViewChild(MatButton) submitButton: MatButton;

  signinForm: FormGroup;

  constructor(public router : Router , public sessionService : SessionsService) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rememberMe: new FormControl(false)
    })
  }

  signin() {
    const signinData = this.signinForm.value
    const user = {
      email : signinData['username'],
      password : signinData['password']
    }
    console.log(user);
    this.sessionService.sessionSignIn(user).subscribe(x => {
      if(x['access_token']){
          localStorage.setItem('user' , JSON.stringify(x));
           this.router.navigate(['/'])
          this.submitButton.disabled = true;
          this.progressBar.mode = 'indeterminate';
      }else {
        alert('Incorrent Username & Passowrd');
      }
    })

  }

}
