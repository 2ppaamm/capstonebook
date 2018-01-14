import {Routes, RouterModule} from '@angular/router';
import {MathComponent} from './math/math.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {ModuleWithProviders} from '@angular/core';
import {AdminComponent} from './admin/admin.component';
import {adminRoutes} from './admin/admin.routes';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {AuthGuardService} from './services/auth-guard.service';
import {LogoutComponent} from './logout/logout.component';

const appRoutes: Routes = [
  { path: '', redirectTo:'/math', pathMatch: 'full'},
  { path: 'math', component: MathComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent},
  { path: 'admin', component: AdminComponent, children: adminRoutes, canActivate: [AuthGuardService]},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
];

export const routes:ModuleWithProviders = RouterModule.forRoot(appRoutes);
