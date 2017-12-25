import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { LayoutComponent } from './layout/layout.component';
import { MemberComponent } from './member/member.component';
import { AccountComponent } from './account/account.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidenavbarComponent } from './layout/sidenavbar/sidenavbar.component';
import { LoadComponent } from './load/load.component';
import { CarouselComponent } from './layout/carousel/carousel.component';
import { CardComponent } from './card/card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {KeysPipe} from './keyspipe';
import {Privilegepipe} from './privilegepipe';
import {MemberService} from './member/member.service';
import { CalenderComponent } from './check-in/calender/calender.component';
import { CheckInComponent } from './check-in/check-in.component';
import {AccountUpdateComponent} from './account/update/account-update.component';
import {MemberUpdateComponent} from './member/update/member-update.component';
import {FormsModule} from '@angular/forms';
import {MemberCreateComponent} from './member/create/member-create.component';
import {CheckInService} from './check-in/check-in.service';
import { ListComponent } from './check-in/list/list.component';
import { RegistrationComponent } from './registration/registration.component';
import {RegistrationUpdateComponent} from './registration/update/registration-update.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LayoutComponent,
    MemberComponent,
    AccountComponent,
    NavbarComponent,
    SidenavbarComponent,
    LoadComponent,
    CarouselComponent,
    CardComponent,
    PageNotFoundComponent,
    KeysPipe,
    Privilegepipe,
    CalenderComponent,
    CheckInComponent,
    AccountUpdateComponent,
    MemberUpdateComponent,
    MemberCreateComponent,
    ListComponent,
    RegistrationComponent,
    RegistrationUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MemberService, CheckInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
