import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() product:any;
  @Output() handleItemRoute= new EventEmitter();
  constructor(public productservice:ProductService){

  }
  ngOnInit(): void {
    console.log(this.product)
  }

  routeToProduct(id:any){
    console.log("am item")
    this.handleItemRoute.emit(id);
    localStorage.setItem("id",id);
    this.productservice.storeId(id);
  }
}
