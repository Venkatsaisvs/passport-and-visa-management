import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-passport',
  templateUrl: './card-passport.component.html',
  styleUrls: ['./card-passport.component.css']
})
export class CardPassportComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }
fnpassportapply(){

  this.router.navigate(['passportcard/passportapply'])
}


fnpassportrenew(){

  this.router.navigate(['passportcard/passportrenewal'])
  
}
}
