import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-visa-cancel',
  templateUrl: './visa-cancel.component.html',
  styleUrls: ['./visa-cancel.component.css']
})
export class VisaCancelComponent implements OnInit {

  visaCancelForm:any;

  constructor(private fb:FormBuilder) {
    this.visaCancelForm=this.fb.group({
      passportNumber:['',[Validators.required,Validators.pattern("[A-PR-WYa-pr-wy][1-9]\\d\\s?\\d{4}[1-9]")]],
      visaNumber:['',Validators.required],

    });

   }

  ngOnInit(): void {
  }

  get formControl(){
    return this.visaCancelForm.controls
  }

}
