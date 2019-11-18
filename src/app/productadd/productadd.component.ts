import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.scss']
})
export class ProductaddComponent implements OnInit {
  productForm: FormGroup;
  product: Product = new Product();
  id: number;
  constructor(private formBuilder: FormBuilder, private service: ProductService,private route:ActivatedRoute) { }
 
  ngOnInit() {
    
      this.productForm = this.formBuilder.group({
      productname: ['', Validators.compose([Validators.required])],
      productdesc: ['', Validators.compose([Validators.required])],
      productprice: ['', Validators.compose([Validators.required])],
      productdate: ['', Validators.compose([Validators.required])],
    });

  }
  addProduct() {
    this.product.productname = this.productForm.controls.productname.value;
    this.product.productdesc = this.productForm.controls.productdesc.value;
    this.product.productprice = this.productForm.controls.productprice.value;
    this.product.productdate = this.productForm.controls.productdate.value;
    this.service.addProduct(this.product).subscribe();
    this.ngOnInit();
  }


}


