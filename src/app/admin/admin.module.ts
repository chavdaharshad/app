import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu1Component } from './menu1/menu1.component';
import { Product1Component } from './product1/product1.component';
import { ListComponent } from './list/list.component';
import { AdminRoutes } from './admin.routing';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContainComponent } from './contain/contain.component';



@NgModule({
  declarations: [
    
    Menu1Component,
         Product1Component,
         ListComponent,
         HeaderComponent,
         FooterComponent,
         ContainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes)
  ]
})
export class AdminModule {
  static product: any;
}
