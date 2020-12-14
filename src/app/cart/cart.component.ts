import { Component, OnInit } from '@angular/core';
import { IAlert } from '../alert';
import { Iproducts } from '../Iproducts.interface';
import { ProductService } from '../services/product.service';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  dafualtQuantity:number=1;
  productAddedTocart:Iproducts[];
  allTotal:number;
  public globalResponse: any;
  public alerts: Array<IAlert> = [];
  deliveryForm:FormGroup;
  itemtot:number;
  items:Iproducts[];

  constructor(private productService:ProductService, private _snackBar: MatSnackBar) {}


  ngOnInit() {
    this.productAddedTocart=this.productService.getProductFromCart();
    for (let i in this.productAddedTocart) {
      this.productAddedTocart[i].Quantity=1;
   }
   this.productService.removeAllProductFromCart();
   this.productService.addProductToCart(this.productAddedTocart);
   this.itemtotal(this.productAddedTocart);
   this.calculteAllTotal(this.productAddedTocart);
  }
  onAddQuantity(product:Iproducts)
  {
    //Get Product
    this.productAddedTocart=this.productService.getProductFromCart();
    this.productAddedTocart.find(p=>p.id==product.id).Quantity = product.Quantity+1;
    //Find produc for which we want to update the quantity
    //let tempProd= this.productAddedTocart.find(p=>p.id==product.id);  
    //tempProd.Quantity=tempProd.Quantity+1;
   
    //this.productAddedTocart=this.productAddedTocart.splice(this.productAddedTocart.indexOf(product), 1)
   //Push the product for cart
   // this.productAddedTocart.push(tempProd);
  this.productService.removeAllProductFromCart();
  this.productService.addProductToCart(this.productAddedTocart);
  this.calculteAllTotal(this.productAddedTocart);

   
  }
  onRemoveQuantity(product:Iproducts)
  {
    this.productAddedTocart=this.productService.getProductFromCart();
    this.productAddedTocart.find(p=>p.id==product.id).Quantity = product.Quantity-1;
    this.productService.removeAllProductFromCart();
    this.productService.addProductToCart(this.productAddedTocart);
    this.calculteAllTotal(this.productAddedTocart);

  }
  calculteAllTotal(allItems:Iproducts[])
  {
    let total=0;
    for (let i in allItems) {
      total= total+(allItems[i].Quantity *allItems[i].price);
   }
   this.allTotal=total;
  } 

  itemtotal(itemtot:Iproducts[]){
    let total1=0;
    for(let i in itemtot){
      total1=total1+ (itemtot[i].Quantity)
    }
    this.itemtot=total1;
  }
  onDelete(id){
    //findIndex(used to find particular index) and slice(slice is used to delete that particulr index) 
    var index = this.productAddedTocart.findIndex(x => x.id === id);
    this.productAddedTocart.splice(index,1); //(index,1) delete only particular array element according to index
    localStorage.setItem('product', JSON.stringify(this.productAddedTocart));
    this.openSnackBar('Item Removed');
    
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, 'close', {
      duration: 2000,
    });
  }
  

}
