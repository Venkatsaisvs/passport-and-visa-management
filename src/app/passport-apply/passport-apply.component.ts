import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-passport-apply',
  templateUrl: './passport-apply.component.html',
  styleUrls: ['./passport-apply.component.css']
})
export class PassportApplyComponent implements OnInit {
  loginForm: any;
  today=new Date();
  todayStr: any;
  constructor(private formBuilder: FormBuilder ,private datepipe:DatePipe) {
    this.todayStr=this.datepipe.transform(this.today,'yyyy-MM-dd');
    this.loginForm = formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', Validators.required],
      eMail: ['',Validators.required],
      gender: [''],
      dateOfBirth: ['',Validators.required],
      placeOfBirth: ['', Validators.required],
      contactNumber: ['', [Validators.required,Validators.pattern("[6789]{1}[0-9]{9}")]],
      aadhar: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      nationality: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  get formControl() {
    return this.loginForm.controls;
  }

}
