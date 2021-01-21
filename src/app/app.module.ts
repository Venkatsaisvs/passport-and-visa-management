import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RenewalPassportComponent } from './renewal-passport/renewal-passport.component';
import { PassportApplyComponent } from './passport-apply/passport-apply.component';
import { VisaApplyComponent } from './visa-apply/visa-apply.component';
import { VisaCancelComponent } from './visa-cancel/visa-cancel.component';
import { MaincardComponent } from './maincard/maincard.component';
import { CardPassportComponent } from './card-passport/card-passport.component';
import { CardVisaComponent } from './card-visa/card-visa.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DatePipe } from '@angular/common';
import { TrackingComponent } from './tracking/tracking.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RenewalPassportComponent,
    PassportApplyComponent,
    VisaApplyComponent,
    VisaCancelComponent,
    MaincardComponent,
    CardPassportComponent,
    CardVisaComponent,
    LoginComponent,
    SignupComponent,
    TrackingComponent,
    ContactUsComponent,
    ForgetpasswordComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
   
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
