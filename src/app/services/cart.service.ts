import { Injectable } from '@angular/core';
import {ICartItem} from './../models/cartItem';

// interface ICartItem{
//   ProductId:number,
//   Quantity:number
// }

@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor() { }

  addToCart(prodId:number){
    var cart=JSON.parse(localStorage.getItem("cart"));
    if(cart==undefined || cart==null){
      cart=[];
    }
    var item={
      ProductId:prodId,
      Quantity:1
    }
    cart.push(item);
    localStorage.setItem("cart",JSON.stringify(cart));
  }

  removeFromCart(prodId:number){
    var cart=JSON.parse(localStorage.getItem("cart"));
    if(cart==undefined || cart==null){
      cart=[];
    }
    cart({ProductId:prodId,Quantity:1});//use slice or splice here
    localStorage.setItem("cart",JSON.stringify(cart));
  }

  updateQuantity(prodId:number,quant:number){
    if(quant==0){
      this.removeFromCart(prodId);
    }
    var cart=JSON.parse(localStorage.getItem("cart"));
    if(cart==undefined || cart==null){
      cart=[];
    }
    var product=cart.find(c=>c.ProductId==prodId).Quantity;
    cart.find(c=>c.ProductId==prodId).Quantity=product.Quantity+1;
    localStorage.setItem("cart",JSON.stringify(cart));
  }
}
