import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {AddToCartLocalAction, RemoveFromCartLocalAction} from '../redux/cart/cart-actions';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private store: Store<any>, private router: Router) { }

  addToCart(productId: number): void{
    this.store.dispatch(new AddToCartLocalAction({data: productId}));
  }

  removeFromCart(productId: number): void{
    this.store.dispatch(new RemoveFromCartLocalAction({data: productId}));
  }

 async getProductsFromArray(products): Promise<any>{
    let url = ' http://localhost:3000/products?';
    products.forEach(value => {
      url += 'id=' + value + '&';
    });
    return await axios.get(url).then(
      response => {
        if (response.status === 200 && response.data.length > 0){
          return Promise.resolve(response.data);
        }else{
         return  Promise.reject({ status: response.status, message: response.data});
        }
      },
      error => {
        return Promise.reject(error);
      }
    );
 }
}
