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
  searchTerm:any;
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

  goToProduct(product:any){
    console.log("am view products")
    console.log(product.id);
    this.productService.sendInfo(product);
    this.route.navigateByUrl(`/product/${product.id}`)
  }
}
