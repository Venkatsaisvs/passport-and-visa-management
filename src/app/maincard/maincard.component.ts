
import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-maincard',
  templateUrl: './maincard.component.html',
  styleUrls: ['./maincard.component.css']
})
export class MaincardComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }
  fnpassport(){

    this.router.navigate(['dashboardmain/passportservices'])
  }
 fnvisa(){


  this.router.navigate(['dashboardmain/visaservices'])
 }
 fnstatus(){

  this.router.navigate(['tracking'])

 }


}
