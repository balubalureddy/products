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
      category: new FormControl('SmartPhone',[Validators.required]),
      price: new FormControl('',[Validators.required,Validators.max(100000),Validators.min(1),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      discountPercentage: new FormControl('',[Validators.required,Validators.max(100000),Validators.min(1)]),
      stock: new FormControl(),
      description: new FormControl(),
    })
  }

  get title(){
    return this.addProductForm.get('title')!;
  }
  submitClicked:Boolean=false;
  submit(){
    this.submitClicked = true;
    console.log(this.addProductForm,this.addProductForm.value)
    if(this.addProductForm.invalid){
      for(const control of Object.keys(this.addProductForm.controls)){
        this.addProductForm.controls[control].markAsTouched();
      }
      return;
    }
    
  }

  reset(){
    // this.addProductForm.setValue({title:"S24 Ultra",brand:"Samsung",category:"SmartPhone",price:"10000",discountPercentage:"5",stock:"1000",description:"something"});
    // this.addProductForm.patchValue({title:"S24 Ultra",brand:"Samsung"});
    // this.addProductForm.get('title')?.setValue("samsung")
    this.addProductForm.reset();
    console.log(this.addProductForm.value);
  }
}
