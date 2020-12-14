import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Iproducts } from './../Iproducts.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Array<Iproducts>; 

  constructor(private productservice:ProductService) { }

  ngOnInit() {
    this.productservice.getAllProducts().subscribe(
      data=>{
        this.products=data;

      }
    );
  


  }
  

}
