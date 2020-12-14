import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { Iproducts } from '../Iproducts.interface';
import { ProductService } from './../services/product.service';
import { SharedService } from '../services/shared.service';
import { IAlert } from './../alert';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';




@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  public alerts: Array<IAlert> = [];
  @Input() product:Iproducts;
  cartItemCount: number = 0;
  @Output() cartEvent = new EventEmitter<number>();
  public globalResponse: any;
  yourByteArray:any;
  allProducts: Iproducts[];
  productAddedTocart:Iproducts[];

  constructor(private productservice:ProductService,private sharedService:SharedService,
              private _snackBar: MatSnackBar,private router:Router) { }

  ngOnInit() {
  }
  OnAddCart(product:Iproducts)
  {
    console.log(product);
    
    this.productAddedTocart=this.productservice.getProductFromCart();
    if(this.productAddedTocart==null)
    {
      this.productAddedTocart=[];
      this.productAddedTocart.push(product);
      this.productservice.addProductToCart(this.productAddedTocart);
      this.openSnackBar('added to cart successsfully');
      this.router.navigate(['']);
      // alert("added to cart")
      
      /*this.alerts.push({
        id: 1,
        type: 'success',
        message: 'Product added to cart.'
      });
      setTimeout(()=>{   
        this.closeAlert(this.alerts);
   }, 3000);*/

    }
    else
    {
      let tempProduct=this.productAddedTocart.find(p=>p.id==product.id);
      if(tempProduct==null)
      {
        this.productAddedTocart.push(product);
        this.productservice.addProductToCart(this.productAddedTocart);
        this.openSnackBar('added to cart successsfully');
        this.router.navigate(['']);
       /* this.alerts.push({
          id: 1,
          type: 'success',
          message: 'Product added to cart.'
        });
        //setTimeout(function(){ }, 2000);
        setTimeout(()=>{   
          this.closeAlert(this.alerts);
     }, 3000);*/
      }
      else
      { 
        this.openSnackBar('already added,check your cart');
        this.router.navigate(['']);
        /*this.alerts.push({
          id: 2,
          type: 'warning',
          message: 'Product already exist in cart.'
        });
        setTimeout(()=>{   
          this.closeAlert(this.alerts);
     }, 3000);*/
      }
      
    }
    //console.log(this.cartItemCount);
    this.cartItemCount=this.productAddedTocart.length;
    // this.cartEvent.emit(this.cartItemCount);
    this.sharedService.updateCartCount(this.cartItemCount);
  }
  public closeAlert(alert:any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
}  
openSnackBar(message: string) {
  this._snackBar.open(message, 'close', {
    duration: 2000,
  });
}

}
