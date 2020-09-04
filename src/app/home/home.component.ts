import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productsService:ProductsService,private route:Router) { }
  products:any[]

  ngOnInit(): void {
    this.getProducst();
  }


  getProducst(){
    this.products=this.productsService.fetchProducts();
  }

  goToProduct(id){
    this.route.navigate(['/detail/1'])
  }
}
