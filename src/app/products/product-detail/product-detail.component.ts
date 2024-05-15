import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productDetail:any
  constructor(private product:ProductService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    console.log(this.productDetail)
    console.log("is this am looking")
    this.activatedRoute.params.subscribe((params:any)=>{
      console.log(params,params.id)
      let id = params?.id || 0;
      // let id = localStorage.getItem("id")
      console.log(this.product.id,"from service");
      this.product.getSingleProduct(id).subscribe((res:any)=>{
        this.productDetail = res;
        console.log(this.productDetail);
      })
    })
    this.product.getInfo().subscribe((res:any)=>{
      console.log(res);
    })
  }
}
