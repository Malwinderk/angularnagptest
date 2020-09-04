import { Injectable } from '@angular/core';
import data from './../../assets/products.json';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor() { }

  getDetails(id){
    var products=data.products;
    return products.find(p=>p.id==id);
  }
}
