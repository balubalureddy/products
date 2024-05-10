import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  id:Number | undefined;
  private subject = new BehaviorSubject({});
  constructor(public http:HttpClient) { }

  getProducts(){
    return this.http.get('https://dummyjson.com/products');
  }

  getSingleProduct(id:any){
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }

  storeId(id:any){
    this.id = id;
  }

  sendInfo(info:any){
    this.subject.next(info);
  }

  getInfo(){
    return this.subject.asObservable();
  }


}


