import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productget',
  templateUrl: './productget.component.html',
  styleUrls: ['./productget.component.scss']
})
export class ProductgetComponent implements OnInit {
  product: Observable<Product>;
  products: Observable<Product[]>;

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.product = this.productService.getProductList();
    this.products = this.productService.getProductList();
  }
  deleteProduct(id:number){
    if(confirm('Do you want to delete this record?'))
    {
      this.productService.deleteProduct(id).subscribe(data=>{
        console.log(data);
      })
    }
  }

}
