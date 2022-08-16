import { AuthenticationGuard } from './../core/authentication/authentication.guard';
import { Routes } from '@angular/router';
import { Product1Component } from './product1/product1.component';
import { Component } from '@angular/core';
import { Menu1Component } from './menu1/menu1.component';
import { ContainComponent } from './contain/contain.component';
import { ListComponent } from './list/list.component';



export const AdminRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthenticationGuard],
    children: [
     {
        path:'product1',
        component:Product1Component
     },
     {
        path: '',
        component: Menu1Component
        
      },
      {
        path:'list',
        component:ListComponent
      }
    ]
  }
];
