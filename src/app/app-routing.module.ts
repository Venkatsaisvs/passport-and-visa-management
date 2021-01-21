import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardPassportComponent } from './card-passport/card-passport.component';
import { CardVisaComponent } from './card-visa/card-visa.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MaincardComponent } from './maincard/maincard.component';
import { PassportApplyComponent } from './passport-apply/passport-apply.component';
import { RenewalPassportComponent } from './renewal-passport/renewal-passport.component';
import { SignupComponent } from './signup/signup.component';
import { TrackingComponent } from './tracking/tracking.component';
import { VisaApplyComponent } from './visa-apply/visa-apply.component';
import { VisaCancelComponent } from './visa-cancel/visa-cancel.component';

const routes: Routes = [ 

  { path: '' , component:HomeComponent},
  {path: 'dashboardmain' , component:MaincardComponent},
  {path: 'dashboardmain/passportservices', component:CardPassportComponent },
  {path: 'dashboardmain/visaservices' , component: CardVisaComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'tracking' , component:TrackingComponent},
  {path:'Contactus' ,component:ContactUsComponent},
  {path:'forgetpassword', component:ForgetpasswordComponent},
  
 {path:'passportcard/passportapply', component:PassportApplyComponent},
 {  path:'passportcard/passportrenewal',component:RenewalPassportComponent},

  {path:'visacard/visaapply', component:VisaApplyComponent},
  { path:'visacard/visacancel', component:VisaCancelComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
