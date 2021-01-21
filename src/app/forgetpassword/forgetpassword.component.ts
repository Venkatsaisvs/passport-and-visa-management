import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  forgetForm : any;
  constructor(private formBuilder:FormBuilder) { 
    this.forgetForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')])
      
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){

    //to print in console(true or false)
    console.log(this.forgetForm.valid);
    
    //to print in console(values)
    if(this.forgetForm.valid){
      console.log(this.forgetForm.value);
    }
  }

}
