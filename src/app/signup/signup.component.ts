import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  signupForm: any;

	constructor(private formBuilder:FormBuilder){
		this.signupForm = new FormGroup({
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('',[Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
			confirmPassword: new FormControl('', [Validators.required])
		});
	}

	ngOnInit(): void {}

	onSubmit(){
		//to print in console(true or false)
		console.log(this.signupForm.valid);
		
		//to print in console(values)
		if(this.signupForm.valid){
			console.log(this.signupForm.value);
		}
		//getting value for checking passwords

		let pass =  this.signupForm.get('password').value;
		let confirmPass = this.signupForm.get('confirmPassword').value;

		//If confirm password matches the actual password

		// if(pass.length > 0 && confirmPass.length > 0){
		// 	if(pass != confirmPass){
		// 		document.getElementById('passwordMsg').innerHTML = 'Passwords didn\'t match';
		// 	}else{
		// 		document.getElementById('confirmpasswordMsg').innerHTML = 'Passwords matched';
		// 		return true;
		// 	}
		// }
		//return null;


		//if confirm password matches the actual password
		if(pass.length >0  && confirmPass.length >0){
			if(pass != confirmPass){
				alert('Passwords didn\'t match')
			}
			else{
				alert('Passwords matched')
			}
		}
	}
  
}
