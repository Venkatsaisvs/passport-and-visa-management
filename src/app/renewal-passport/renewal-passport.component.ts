import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-renewal-passport',
  templateUrl: './renewal-passport.component.html',
  styleUrls: ['./renewal-passport.component.css']
})
export class RenewalPassportComponent implements OnInit {

  today=new Date();
  todayStr:any;
  loginForm:any;

  constructor(private formBuilder:FormBuilder,private datepipe:DatePipe) {
    this.todayStr=this.datepipe.transform(this.today,'yyyy-MM-dd');
    this.loginForm = formBuilder.group({
      userName:['',[Validators.required,Validators.minLength(3)]],
      passportNumber:['',[Validators.required,Validators.pattern("[A-PR-WYa-pr-wy][1-9]\\d\\s?\\d{4}[1-9]")]],
      placeOfIssue:['',Validators.required],
      
      DateOfIssue:['',Validators.required],
      DateOfExpiry:['',Validators.required]
    })
    this.loginForm.get("userName").updateValueAndValidity({'onlySelf':true});
    this.loginForm.get("passportNumber").updateValueAndValidity({'onlySelf':true});

   }

  ngOnInit(): void {
    //alert(JSON.stringify());
  }
  get formControl(){
    return this.loginForm.controls
  }

}
