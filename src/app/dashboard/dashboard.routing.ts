import { AuthenticationGuard } from './../core/authentication/authentication.guard';
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


export const DashboardRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: {
          title: 'Dashboard'
        }
      }
    ]
  }
];
