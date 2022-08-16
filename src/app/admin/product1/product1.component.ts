import { Component, OnInit } from '@angular/core';
import { Product } from '../admin.model';


@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {
  
 products: Product[]=[
    new Product( 
    'https://pinchofyum.com/wp-content/assets/images/cta/poy-ecookbook-2021.png','book',1000)
  ];
 
  constructor() { }
  ngOnInit(): void {
  }

}
