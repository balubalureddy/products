import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }

  getProducts(){
    return this.http.get('https://dummyjson.com/products');
  }

  getSingleProduct(id:any){
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }
}


