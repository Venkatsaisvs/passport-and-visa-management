import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-visa-apply',
  templateUrl: './visa-apply.component.html',
  styleUrls: ['./visa-apply.component.css']
})
export class VisaApplyComponent implements OnInit {
  today = new Date();
  todayStr:any;    //transformed date in "yyyy-MM-dd"

  visaApplyForm:any;

  constructor(private fb:FormBuilder, private datepipe:DatePipe) { 
    this.todayStr=this.datepipe.transform(this.today,'yyyy-MM-dd');
    this.visaApplyForm=this.fb.group({
      passportNumber:['',[Validators.required,Validators.pattern("[A-PR-WYa-pr-wy][1-9]\\d\\s?\\d{4}[1-9]")]],
      typeOfVisa:['',Validators.required],
      dateOfIssue:['',Validators.required],
      dateOfExpiry:['',Validators.required],
      contactNumber:['',[Validators.required,Validators.pattern("[6789]{1}[0-9]{9}")]],
      country:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  get formControl(){
    return this.visaApplyForm.controls
  }

//   validateInput(field) {

//     this.visaApplyForm.patchValue({ [field.id]: this.visaApplyForm.controls[field.id].value }); }

// }

}