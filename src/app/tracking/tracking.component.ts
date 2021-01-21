import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {
  loginForm= new FormGroup({
    passportNumber: new FormControl('',[Validators.required,Validators.pattern("[A-PR-WYa-pr-wy][1-9]\\d\\s?\\d{4}[1-9]")])
  })

  constructor() { }

  ngOnInit(): void {
  }
  get passportNumber(){return this.loginForm.get('passportNumber')}

  get formControl(){
    return this.loginForm.controls
  }
}
