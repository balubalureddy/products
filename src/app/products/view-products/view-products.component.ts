import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss']
})
export class ViewProductsComponent implements OnInit {
  products:any=[];
  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute, private route : Router){

  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res:any)=>{
      console.log(res);
      this.products=res.products
    })
    this.activatedRoute.queryParamMap.subscribe((params:any)=>{
      console.log(params);
    })
  }

  goToProduct(id:any){
    console.log(id);
    this.route.navigateByUrl(`/product/${id}`)
  }
}
