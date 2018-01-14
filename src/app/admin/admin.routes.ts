import {Routes} from '@angular/router';
import {AdminCourseListComponent} from './admin-course-list/admin-course-list.component';
import {DashboardComponent} from './dashboard.component';
import {AdminCourseCreateComponent} from './admin-course-create/admin-course-create.component';
import {AdminCourseEditComponent} from './admin-course-edit/admin-course-edit.component';
import {AdminCourseDeleteComponent} from './admin-course-delete/admin-course-delete.component';
import {AdminUserCreateComponent} from './admin-user-create/admin-user-create.component';
import {AdminUserListComponent} from './admin-user-list/admin-user-list.component';

export const adminRoutes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'courses', component: AdminCourseListComponent},
  { path: 'courses/create', component: AdminCourseCreateComponent},
  { path: 'courses/edit/:id', component: AdminCourseEditComponent },
  { path: 'courses/delete/:id', component: AdminCourseDeleteComponent },
  { path: 'users/create', component: AdminUserCreateComponent},
  { path: 'users', component: AdminUserListComponent},
];
