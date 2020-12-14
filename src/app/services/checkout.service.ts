import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Checkout } from '../checkout.interface';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

constructor() { }
addUser(user:Checkout) {
  let users = [];
  if (localStorage.getItem('Users')) {
    users = JSON.parse(localStorage.getItem('Users'));
    users = [user, ...users];
  } else {
    users = [user];
  }
  localStorage.setItem('Users', JSON.stringify(users));
}
getUser() {
  return JSON.parse(localStorage.getItem("Users"));
}

}
