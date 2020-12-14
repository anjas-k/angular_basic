import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from  'rxjs/operators'
import { Observable, throwError} from 'rxjs'
import { Iproducts } from './../Iproducts.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

constructor(private http:HttpClient) { }
getAllProducts():Observable<Iproducts[]>{  
  return this.http.get('datas/products.json').pipe(
    map(data=>{
      const productsArray:Array<Iproducts>=[];
      for (const id in data){
        if(data.hasOwnProperty(id)){
        productsArray.push(data[id]);}
      }
      return productsArray
    })
  
  )
}
addProductToCart(products: any) {
  localStorage.setItem("product", JSON.stringify(products));
}
getProductFromCart() {
  return JSON.parse(localStorage.getItem("product"));
}
removeAllProductFromCart() {
  return localStorage.removeItem("product");
}
errorHandler(error: Response) {  
  console.log(error);  
  return throwError(error);  
} 

}
