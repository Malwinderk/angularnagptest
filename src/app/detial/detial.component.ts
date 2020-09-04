import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailsService } from '../services/details.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-detial',
  templateUrl: './detial.component.html',
  styleUrls: ['./detial.component.css']
})
export class DetialComponent implements OnInit {
  id:number;
  product:any;
  constructor(private activeRoute:ActivatedRoute,private detailService:DetailsService,private cartService:CartService,private route:Router) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      this.fetchDetaisl(1);
    });
  }


  fetchDetaisl(id){
    var details=this.detailService.getDetails(id);
    this.product=details;
  }

  AddToCart(id){
    this.cartService.addToCart(id);
    this.route.navigate(['/cart']);
  }
}
