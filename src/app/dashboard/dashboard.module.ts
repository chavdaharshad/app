import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DashboardRoutes } from './dashboard.routing';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    NgbModule,
    RouterModule.forChild(DashboardRoutes)
  ],
  declarations: [DashboardComponent, ProductComponent, HeaderComponent, FooterComponent, MenuComponent, CartComponent]
})
export class DashboardModule {}
