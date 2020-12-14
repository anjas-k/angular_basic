import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductService } from './services/product.service';
import { FooterComponent } from './footer/footer.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartComponent } from './cart/cart.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import { SharedService } from './services/shared.service';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
   declarations: [
      AppComponent,
      NavBarComponent,
      HomeComponent,
      ProductListComponent,
      ProductCardComponent,
      FooterComponent,
      CartItemComponent,
      CartComponent,
      CheckoutComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      NgbModule,
      BrowserAnimationsModule,
      HttpClientModule,
      FormsModule,
      MatSnackBarModule,
      MatBadgeModule,
      MatIconModule,
      ReactiveFormsModule 
   ],
   providers: [
      ProductService,
      SharedService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
