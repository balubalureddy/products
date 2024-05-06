import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit{

  addProductForm!:FormGroup;
  constructor(){

  }

  ngOnInit(): void {
    this.addProductForm = new FormGroup({
      title: new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(2)]),
      brand: new FormControl('',[Validators.required]),
      category: new FormControl('',[Validators.required]),
      price: new FormControl('',[Validators.required,Validators.max(100000),Validators.min(1)]),
      discountPercentage: new FormControl(),
      stock: new FormControl(),
      description: new FormControl(),
    })
  }

  get title(){
    return this.addProductForm.get('title')!;
  }

  submit(){
    if(this.addProductForm.invalid){
      for(const control of Object.keys(this.addProductForm.controls)){
        this.addProductForm.controls[control].markAsTouched();
      }
      return;
    }
    console.log(this.addProductForm,this.addProductForm.value)
  }

  reset(){
    this.addProductForm.reset();
    console.log(this.addProductForm.value);
  }
}
