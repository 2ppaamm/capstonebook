import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { MathComponent } from './math/math.component';
import { CourseListComponent } from './math/course-list/course-list.component';
import { CourseComponent } from './math/course-list/course.component';
import { CourseService } from './services/course.service';
import { CourseDetailComponent } from './math/course-detail/course-detail.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import {HttpClientModule} from '@angular/common/http';

import {routes} from './app.routes';
import { AdminComponent } from './admin/admin.component';
import { AdminCourseListComponent } from './admin/admin-course-list/admin-course-list.component';
import { DashboardComponent } from './admin/dashboard.component';
import { AdminCourseCreateComponent } from './admin/admin-course-create/admin-course-create.component';
import { AdminCourseEditComponent } from './admin/admin-course-edit/admin-course-edit.component';
import { AdminCourseDeleteComponent } from './admin/admin-course-delete/admin-course-delete.component';
import { AdminUserCreateComponent } from './admin/admin-user-create/admin-user-create.component';
import {UserService} from './services/user.service';
import { AdminUserListComponent } from './admin/admin-user-list/admin-user-list.component';
import { RegisterComponent } from './register/register.component';
import {AuthService} from './services/auth.service';
import { LoginComponent } from './login/login.component';
import {AuthGuardService} from './services/auth-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { JwtModule } from '@auth0/angular-jwt';
import { DropdownDirective } from './directives/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MathComponent,
    CourseListComponent,
    CourseComponent,
    CourseDetailComponent,
    ContactComponent,
    AboutComponent,
    AdminComponent,
    AdminCourseListComponent,
    DashboardComponent,
    AdminCourseCreateComponent,
    AdminCourseEditComponent,
    AdminCourseDeleteComponent,
    AdminUserCreateComponent,
    AdminUserListComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    DropdownDirective,
  ],
  imports: [
    routes,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        },
        whitelistedDomains: ['localhost:4200', 'angularbook.app']
      }
    })
  ],
  providers: [CourseService, UserService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
