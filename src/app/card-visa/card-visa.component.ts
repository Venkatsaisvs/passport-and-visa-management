import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-visa',
  templateUrl: './card-visa.component.html',
  styleUrls: ['./card-visa.component.css']
})
export class CardVisaComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }

  fnvisaapply(){
          
     
    this.router.navigate(['visacard/visaapply'])

  }

  fnvisacancel(){

    this.router.navigate(['visacard/visacancel'])
  }

   
}
