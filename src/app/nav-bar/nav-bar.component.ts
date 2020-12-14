import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../Iproducts.interface';
import { ProductService } from './../services/product.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  iconcount:Iproducts[];
  itemtot:number;
  cartItemCount:number=0;


  constructor(private productService:ProductService,private sharedservice:SharedService) { }

  ngOnInit() {
    this.sharedservice.currentMessage.subscribe(msg => this.cartItemCount = msg);
    this.iconcount=this.productService.getProductFromCart();
    for (let i in this.iconcount) {
      this.iconcount[i].Quantity=1;
   }
   this.productService.addProductToCart(this.iconcount);
   this.itemtotal(this.iconcount);
  
  }
  itemtotal(itemtot:Iproducts[]){
    let total=0;
    for(let i in itemtot){
      total=total+(itemtot[i].Quantity)
    }
    this.itemtot=total;
  }

}
