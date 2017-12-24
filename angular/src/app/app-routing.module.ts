import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MemberComponent } from './member/member.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import {LayoutComponent} from './layout/layout.component';
import {AuthGuard} from './guard/auth-guard.service';
import {LoginComponent} from './account/login/login.component';
import {AuthService} from './auth.service';
import {CheckInComponent} from './check-in/check-in.component';
import {AccountUpdateComponent} from './account/update/account-update.component';
import {MemberUpdateComponent} from './member/update/member-update.component';
import {MemberCreateComponent} from './member/create/member-create.component';


const appRoutes: Routes = [
  {path: 'layout', component: LayoutComponent, canActivate: [AuthGuard], children: [
    { path: 'member', component: MemberComponent, },
    { path: 'account', component: AccountComponent },
    { path: 'check-in', component: CheckInComponent, },
    { path: 'accountupdate', component: AccountUpdateComponent },
    { path: 'membercreate', component: MemberCreateComponent },
    { path: 'memberupdate/:memberId', component: MemberUpdateComponent },
    { path: '', component: HomeComponent },
     ]},
  { path: 'login', component: LoginComponent},
  { path: '',
    redirectTo: '/layout',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuard,
    AuthService]
})
export class AppRoutingModule {}
