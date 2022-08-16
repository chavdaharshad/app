import { AuthenticationGuard } from './../core/authentication/authentication.guard';
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { Component } from '@angular/core';
import { CartComponent } from './cart/cart.component';


export const DashboardRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
        
      },
      {
        path:'product',
        component: ProductComponent
      },
      {
        path:'cart',
        component: CartComponent
      }
    ]
  }
];
