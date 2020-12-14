import { Component, OnInit,Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckoutService } from '../services/checkout.service';
import { Checkout } from './../checkout.interface';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutform: FormGroup;
  user:Checkout;
  userSubmitted: boolean; 
  constructor(private fb:FormBuilder,private router:Router,private checkout:CheckoutService) { }

  ngOnInit() {
    this.checkoutForm();
  }



  checkoutForm(){ 
    this.checkoutform=this.fb.group({
      username:[null,Validators.required],
      email: [null, [Validators.required, Validators.email]],
      mobile: [null, [Validators.required, Validators.maxLength(10)]]


    })

  }
  get username() {
    return this.checkoutform.get('username') as FormControl;
  }

  get email() {
    return this.checkoutform.get('email') as FormControl;
  }
  get mobile() {
    return this.checkoutform.get('mobile') as FormControl;
  }

  onSubmit() {
    this.userSubmitted=true;
    console.log(this.checkoutform.value);
    if (this.checkoutform.valid){ 
    this.checkout.addUser(this.userData()); 
    this.checkoutform.reset();
    this.userSubmitted=false;
    }
    
    
  }
  userData(): Checkout{   
    return this.user = {
      username: this.username.value,
      email: this.email.value,
      phonenumber: this.mobile.value
    }
  }
}