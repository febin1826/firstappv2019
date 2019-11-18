import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.scss']
})
export class ProducteditComponent implements OnInit {
  productform: FormGroup;
  product: Product = new Product();

  pid: number;
  constructor(private formBuilder: FormBuilder, private service: ProductService,private route:ActivatedRoute,
    private toastr:ToastrService) { }

  ngOnInit() {
    

    this.productform = this.formBuilder.group({
      productid: [null],
      productname: ['', Validators.compose([Validators.required])],
      productdesc: ['', Validators.compose([Validators.required])],
      productprice: ['', Validators.compose([Validators.required])],
      productdate: ['', Validators.compose([Validators.required])],
    });
    
    this.pid=this.route.snapshot.params["id"];
    console.log(this.pid)

  this.service.getProduct(this.pid).subscribe(x=>{
    console.log(x);
      this.product=x;
      //console.log(this.product);
     
  },
  error => console.log(error));
}

get formControls()
{
  return this.productform.controls;
}

updateProduct()
  {
    this.product.productid=this.productform.controls.productid.value;
    this.product.productname=this.productform.controls.productname.value;
    this.product.productdesc=this.productform.controls.productdesc.value;
    this.product.productdate=this.productform.controls.productdate.value;
    this.product.productprice=this.productform.controls.productprice.value;
    this.service.updateProduct(this.pid,this.product).subscribe(res=>{
      this.toastr.success('Updated Successfully..!!', 'Success');
      this.ngOnInit();
    });
  }

}