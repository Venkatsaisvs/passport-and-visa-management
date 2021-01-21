import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {  ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    //  userName: string;
    //  password : string;
    //   status : string;


loginForm:any;

constructor(private formBuilder:FormBuilder,private router:Router, private route:ActivatedRoute) {
  this.loginForm = formBuilder.group({
	email:['',[Validators.required]],
  password:['',Validators.required],

  })
 
 }

ngOnInit(): void {}

onSubmit(){
  //printing in console
  console.log(this.loginForm.valid);
  if(this.loginForm.valid)
    console.log(this.loginForm.value);
  
  
  //email and password both are given or not
  if(this.loginForm.get('email').value && this.loginForm.get('password').value){
    alert("login successfully")
  }
  else{
    alert("please login")
  }
}

reset(){

  this.router.navigate(['forgetpassword'])
}
 
}
